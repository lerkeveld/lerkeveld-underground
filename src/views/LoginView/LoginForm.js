import React, { useState, useCallback } from 'react';
import { withRouter } from 'react-router-dom'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import LoadingButton from '../../components/LoadingButton';
import PasswordField from '../../components/PasswordField';
import TextField from '../../wrappers/TextField';

import useAuthStyles from '../../assets/jss/useAuthStyles';
import useFormikSubmit from '../../hooks/useFormikSubmit';
import useEnqueueSnackbar from '../../hooks/useEnqueueSnackbar';
import * as api from '../../api';

// FORM SCHEMA
const SCHEMA = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
});

// INITIAL VALUES
const INITIAL = {email: '', password: ''}


function LoginForm(props) {
    const classes = useAuthStyles();
    const { referrer } = props.location.state || { referrer: { pathname: '/' } };

    const [errorMessage, setErrorMessage] = useState(null);
    const onSubmit = useFormikSubmit(
        useCallback((values, actions) => {
            setErrorMessage(null);
            return {
                method: 'POST',
                path: '/auth/login',
                data: {
                    email: values.email,
                    password: values.password
                },
                retryCredentials: false
                }
        }, []),
        useCallback(async (data, actions) => {
            await api.setCredentials(data);
            await props.history.push(referrer);
        }, [props.history, referrer]),
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
                <Field
                  name="password"
                  component={PasswordField}
                  label="Wachtwoord"
                  fullWidth
                  margin="normal"
                  showEndAdornment
                  InputLabelProps={{
                    shrink: true,
                  }}
                  required
                />
                <LoadingButton
                  className={classes.submit}
                  variant="contained"
                  color="secondary"
                  size="medium"
                  type="submit"
                  loading={isSubmitting}
                >
                  Login
                </LoadingButton>
              </Form>
            )}
          </Formik>
    )
}

export default withRouter(LoginForm);
