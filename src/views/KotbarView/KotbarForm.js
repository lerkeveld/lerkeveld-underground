import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom'
import { Formik, Form, Field } from 'formik';
import { CheckboxWithLabel } from 'formik-material-ui';
import * as Yup from 'yup';

import LoadingButton from '../../components/LoadingButton';
import TextField from '../../wrappers/TextField';
import Typography from '@material-ui/core/Typography';

import KotbarDatePicker from './KotbarDatePicker';

import * as utils from '../../utils';
import useFormikSubmit from '../../hooks/useFormikSubmit';
import useEnqueueSnackbar from '../../hooks/useEnqueueSnackbar';

// FORM SCHEMA
const SCHEMA = Yup.object().shape({
    date: Yup.string().nullable().required(),
    description: Yup.string().required(),
    acceptRules: Yup.bool().oneOf([true]).required(),
});

// INITIAL VALUES
const INITIAL = {date: null, description: '', acceptRules: false}

function KotbarForm({
    disabled = true,
    reservations = [],
    refresh,
    ...props
}) {

    const [snackMessage, setSnackMessage] = useState(null);
    const onSubmit = useFormikSubmit(
        useCallback((values, actions) => {
            setSnackMessage(null);
            return {
                method: 'POST',
                path: '/kotbar/',
                data: {
                    date: utils.serializeDate(values.date),
                    description: values.description
                },
            }
        }, []),
        useCallback((data, actions) => {
            actions.resetForm({values: INITIAL});
            setSnackMessage('Kotbar gereserveerd');
            refresh();
        }, [refresh]),
        useCallback((reason, actions) => {setSnackMessage(reason);}, [])
    );

    useEnqueueSnackbar(snackMessage);

    return (
        <Formik
            initialValues={INITIAL}
            onSubmit={onSubmit}
            validationSchema={SCHEMA}
        >
          {({ isSubmitting, errors, touched, setFieldValue }) => (
              <Form noValidate {...props}>
                <Field
                   name="date"
                   component={KotbarDatePicker}
                   disabled={disabled || isSubmitting}
                   reservations={reservations}
                />
                <Field
                  name="description"
                  component={TextField}
                  label="Beschrijving"
                  fullWidth
                  margin="dense"
                  InputLabelProps={{
                    shrink: true
                  }}
                  required
                  disabled={disabled || isSubmitting}
                />
                <Field
                  name="acceptRules"
                  type="checkbox"
                  component={CheckboxWithLabel}
                  disabled={disabled || isSubmitting}
                  Label={{label:
                      <Typography
                          variant="body2"
                          color={
                              errors.hasOwnProperty('acceptRules') &&
                              touched.hasOwnProperty('acceptRules')
                              ? "error" : "inherit"
                          }
                      >
                        Ik accepteer de <Link
                            to="/kotbar_rules.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                              style={{color:
                                  disabled || isSubmitting
                                  ? "inherit"
                                  : errors.hasOwnProperty('acceptRules') &&
                                    touched.hasOwnProperty('acceptRules')
                                      ? "inherit": null
                              }}
                        >kotbar rules</Link>.<sup>*</sup>
                    </Typography>
                  }}
                />
                <div style={{marginTop: '8px', display: 'flex'}}>
                  <LoadingButton
                    disabled={disabled || isSubmitting}
                    variant="contained"
                    color="primary"
                    size="small"
                    type="submit"
                    style={{marginRight: "8px"}}
                    loading={isSubmitting}
                  >
                    Submit
                  </LoadingButton>
                </div>
              </Form>
          )}
        </Formik>
    );
}

export default KotbarForm;
