import React, { useState, useCallback } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import Button from '@material-ui/core/Button';
import LoadingButton from '../../components/LoadingButton';
import PasswordField from '../../components/PasswordField';
import TextField from '../../wrappers/TextField';
import Typography from '@material-ui/core/Typography';

import useFormikSubmit from '../../hooks/useFormikSubmit';
import useEnqueueSnackbar from '../../hooks/useEnqueueSnackbar';

// FORM SCHEMA
const SCHEMA = Yup.object().shape({
    email:    Yup.string().email().required(),
    password: Yup.string().required(),
});
const INITIAL = {email: '', password: ''};

const ProfileLink = React.forwardRef((props, ref) => <Link to="/profiel" {...props} ref={ref} />);

function EditEmailForm(props) {

    const [errorMessage, setErrorMessage] = useState(null);
    const onSubmit = useFormikSubmit(
        useCallback((values, actions) => {
            setErrorMessage(null);
            return {
                method: 'POST',
                path: '/user/edit/secure',
                data: {
                    check: values.password,
                    email: values.email,
                },
            }
        }, []),
        useCallback((data, actions) => {
            props.history.push('/profiel');
        }, [props.history]),
        useCallback((reason, actions) => {setErrorMessage(reason);}, [])
    );
    useEnqueueSnackbar(errorMessage);

    return (
        <>
          <Typography variant="subtitle2">
            Wijzig e-mailadres
          </Typography>
          <Formik
              initialValues={INITIAL}
              onSubmit={onSubmit}
              validationSchema={SCHEMA}
          >
              {({ isSubmitting, errors, touched }) => (
                <Form noValidate>
                  <Field
                    name="email"
                    component={TextField}
                    margin="normal"
                    label="E-mailadres"
                    fullWidth
                    InputLabelProps={{
                      shrink: true
                    }}
                    required
                  />
                  <Field
                    name="password"
                    component={PasswordField}
                    margin="normal"
                    label="Huidig wachtwoord"
                    fullWidth
                    showEndAdornment
                    InputLabelProps={{
                      shrink: true
                    }}
                    required
                  />
                  <div style={{marginTop: '8px', display: 'flex'}}>
                    <LoadingButton
                      variant="contained"
                      color="primary"
                      size="small"
                      type="submit"
                      style={{marginRight: "8px"}}
                      loading={isSubmitting}
                    >
                      Submit
                    </LoadingButton>
                    <Button
                      color="primary"
                      size="small"
                      component={ProfileLink}
                    >
                      Back
                    </Button>
                  </div>
                </Form>
              )}
          </Formik>
        </>
    );
}

export default withRouter(EditEmailForm);
