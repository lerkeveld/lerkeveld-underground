import React, { useState, useCallback } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import LoadingButton from '../../components/LoadingButton';
import TextField from '../../wrappers/TextField';

import useAuthStyles from '../../assets/jss/useAuthStyles';
import useFormikSubmit from '../../hooks/useFormikSubmit';
import useEnqueueSnackbar from '../../hooks/useEnqueueSnackbar';

// FORM SCHEMA
const SCHEMA = Yup.object().shape({
    email: Yup.string()
      .email()
      .required(),
});

// INITIAL VALUES
const INITIAL = {email: ''}


function ResetForm({setSubmitted, ...props}) {
    const classes = useAuthStyles();

    const [errorMessage, setErrorMessage] = useState(null);
    const onSubmit = useFormikSubmit(
        useCallback((values, actions) => {
            setErrorMessage(null);
            return {
                method: 'POST',
                path: '/auth/reset',
                data: {
                    email: values.email,
                },
                retryCredentials: false
            }
        }, []),
        useCallback((data, actions) => {setSubmitted(true);}, [setSubmitted]),
        useCallback((reason, actions) => {setErrorMessage(reason);}, [])
    );
    useEnqueueSnackbar(errorMessage);

    return (
          <Formik
              initialValues={INITIAL}
              onSubmit={onSubmit}
              validationSchema={SCHEMA}
          >
            {({ isSubmitting, errors }) => (
              <Form noValidate>
                <Field
                  name="email"
                  component={TextField}
                  label="E-mail"
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  required
                />
                <LoadingButton
                  className={classes.submit}
                  variant="contained"
                  color="secondary"
                  size="small"
                  type="submit"
                  loading={isSubmitting}
                >
                  Verstuur reset e-mail
                </LoadingButton>
              </Form>
            )}
          </Formik>
    )
}

export default ResetForm;
