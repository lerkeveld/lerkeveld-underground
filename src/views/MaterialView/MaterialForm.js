import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom'
import { Formik, Form, Field } from 'formik';
import { CheckboxWithLabel } from 'formik-material-ui';
import * as Yup from 'yup';

import Button from '@material-ui/core/Button';
import LoadingButton from '../../components/LoadingButton';
import Typography from '@material-ui/core/Typography';

import MaterialSelect from './MaterialSelect';
import MaterialDatePicker from './MaterialDatePicker';

import * as utils from '../../utils';
import useFormikSubmit from '../../hooks/useFormikSubmit';
import useEnqueueSnackbar from '../../hooks/useEnqueueSnackbar';

// FORM SCHEMA
const SCHEMA = Yup.object().shape({
    date: Yup.string().nullable().required(),
    items: Yup.array().of(Yup.object().shape({
        id: Yup.number().required(),
        name: Yup.string().required(),
    })).required(),
    acceptRules: Yup.bool().oneOf([true]).required(),
});

// INITIAL VALUES
const INITIAL = {date: null, items: [], acceptRules: false}

function MaterialForm({
    disabled = true,
    reservations = [],
    items = [],
    refresh,
    ...props
}) {
    const [dateChosen, setDateChosen] = useState(false);

    const [snackMessage, setSnackMessage] = useState(null);
    const onSubmit = useFormikSubmit(
        useCallback((values, actions) => {
            setSnackMessage(null);
            return {
                method: 'POST',
                path: '/materiaal/',
                data: {
                    date: utils.serializeDate(values.date),
                    items: values.items.map(item => item.id),
                },
            }
        }, []),
        useCallback((data, actions) => {
            actions.resetForm(INITIAL);
            setSnackMessage('Materiaal gereserveerd');
            setDateChosen(false);
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
          {({ isSubmitting, values, errors, touched, setFieldValue, setFieldTouched }) => (
              <Form noValidate {...props}>
                <Field
                   name="date"
                   component={MaterialDatePicker}
                   disabled={disabled || dateChosen || isSubmitting}
                />
                { dateChosen
                    ? <>
                        <Field
                         name="items"
                         component={MaterialSelect}
                         disabled={disabled || isSubmitting}
                         reservations={reservations}
                         items={items}
                         selectedDate={values.date}
                        />
                        <Field
                          name="acceptRules"
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
                                    to="/materiaal_rules.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                      style={{color:
                                          disabled || isSubmitting
                                          ? "inherit"
                                          : errors.hasOwnProperty('acceptRules') &&
                                            touched.hasOwnProperty('acceptRules')
                                              ? "inherit": null
                                      }}
                                >materiaal rules</Link>.<sup>*</sup>
                            </Typography>
                          }}
                        />
                      </>
                    : null
                }
                <div style={{marginTop: '8px', display: 'flex'}}>
                  <Button
                    disabled={disabled || !dateChosen}
                    variant="contained"
                    size="small"
                    onClick={() => {
                        setDateChosen(false);
                        setFieldValue('items', [], false);
                    }}
                    style={{marginRight: "8px"}}
                  >
                    Back
                  </Button>
                  { dateChosen
                      ? <LoadingButton
                          variant="contained"
                          color="primary"
                          size="small"
                          type="submit"
                          loading={isSubmitting}
                        >
                          Submit
                        </LoadingButton>
                      : <Button
                          variant="contained"
                          color="primary"
                          size="small"
                          onClick={() => {
                              if (values.date !== INITIAL.date)
                                  setDateChosen(true);
                              else
                                  setFieldTouched('date', true, true);
                          }}
                          disabled={disabled}
                        >
                          Next
                        </Button>
                  }
                </div>
              </Form>
          )}
        </Formik>
    );
}

export default MaterialForm;
