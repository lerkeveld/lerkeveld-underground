import React, { useState, useCallback } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import Button from '@material-ui/core/Button';
import LoadingButton from '../../components/LoadingButton';
import PasswordField from '../../components/PasswordField';
import Typography from '@material-ui/core/Typography';

import useFormikSubmit from '../../hooks/useFormikSubmit';
import useEnqueueSnackbar from '../../hooks/useEnqueueSnackbar';

// FORM SCHEMA
const SCHEMA = Yup.object().shape({
    password: Yup.string().min(8).required(),
    confirm:  Yup.string().oneOf([Yup.ref('password')]).required(),
    check: Yup.string().required(),
});
const INITIAL = {password: '', confirm: '', check: ''};

const ProfileLink = React.forwardRef((props, ref) => <Link to="/profiel" {...props} ref={ref} />);


function EditPasswordForm(props) {

    const [errorMessage, setErrorMessage] = useState(null);
    const onSubmit = useFormikSubmit(
        useCallback((values, actions) => {
            setErrorMessage(null);
            return {
                method: 'POST',
                path: '/user/edit/secure',
                data: {
                    check: values.check,
                    password: values.password,
                },
            }
        }, []),
        useCallback((data, actions) => {
            props.history.push('/profiel');
        }, [props.history]),
        useCallback((reason, actions) => setErrorMessage(reason), [])
    );
    useEnqueueSnackbar(errorMessage);

    return (
        <>
          <Typography variant="subtitle2">
            Wijzig wachtwoord
          </Typography>
          <Formik
              initialValues={INITIAL}
              onSubmit={onSubmit}
              validationSchema={SCHEMA}
          >
              {({ isSubmitting, errors, touched }) => (
                <Form noValidate>
                  <Field
                    name="check"
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
                  <Field
                    name="password"
                    component={PasswordField}
                    margin="normal"
                    label="Nieuw wachtwoord"
                    helperText="Vul hier minimaal 8 tekens in."
                    type="password"
                    fullWidth
                    InputLabelProps={{
                      shrink: true
                    }}
                    required
                  />
                  <Field
                    name="confirm"
                    component={PasswordField}
                    margin="normal"
                    label="Herhaal nieuw wachtwoord"
                    type="password"
                    fullWidth
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

export default withRouter(EditPasswordForm);
