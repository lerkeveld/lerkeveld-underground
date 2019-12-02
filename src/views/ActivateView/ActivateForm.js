import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom'
import { Formik, Form, Field } from 'formik';
import { CheckboxWithLabel } from 'formik-material-ui';
import * as Yup from 'yup';

import LoadingButton from '../../components/LoadingButton';
import PasswordField from '../../components/PasswordField';
import TextField from '../../wrappers/TextField';
import Typography from '@material-ui/core/Typography';

import useAuthStyles from '../../assets/jss/useAuthStyles';
import useFormikSubmit from '../../hooks/useFormikSubmit';
import useEnqueueSnackbar from '../../hooks/useEnqueueSnackbar';


// FORM SCHEMA
const SCHEMA = Yup.object().shape({
    email:         Yup.string().email().required(),
    password:      Yup.string().min(8).required(),
    confirm:       Yup.string().oneOf([Yup.ref('password')]).required(),
    isSharing:     Yup.bool(),
    acceptPrivacy: Yup.bool().oneOf([true]).required(),
});

// INITIAL VALUES
const INITIAL = {
    email: '', password: '', confirm: '', isSharing: false, acceptPrivacy: false
};


function ActivateForm({setSubmitted, ...props}) {
    const classes = useAuthStyles();

    const [errorMessage, setErrorMessage] = useState(null);
    const onSubmit = useFormikSubmit(
        useCallback((values, actions) => {
            setErrorMessage(null);
            return {
                method: 'POST',
                path: '/auth/activate',
                data: {
                    email: values.email,
                    password: values.password,
                    isSharing: values.isSharing
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
            {({ isSubmitting, errors, touched }) => (
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
                   label="Nieuw wachtwoord"
                   helperText="Vul hier minimaal 8 tekens in."
                   fullWidth
                   margin="normal"
                   InputLabelProps={{
                     shrink: true,
                   }}
                   required
                 />
                 <Field
                   name="confirm"
                   component={PasswordField}
                   label="Herhaal wachtwoord"
                   fullWidth
                   margin="normal"
                   InputLabelProps={{
                     shrink: true,
                   }}
                   required
                 />
                 <Field
                   name="isSharing"
                   component={CheckboxWithLabel}
                   Label={{label:
                       <Typography variant="body2">
                         Ik deel mijn contactgegevens met alle Lerkies.
                       </Typography>
                   }}
                 />
                 <Field
                   name="acceptPrivacy"
                   component={CheckboxWithLabel}
                   Label={{label:
                       <Typography
                           variant="body2"
                           color={
                               errors.hasOwnProperty('acceptPrivacy') &&
                               touched.hasOwnProperty('acceptPrivacy')
                               ? "error" : "inherit"
                           }
                       >
                         Ik heb de <Link
                             to="/privacy_policy.pdf"
                             target="_blank"
                             rel="noopener noreferrer"
                             style={{color:
                                 errors.hasOwnProperty('acceptPrivacy') &&
                                 touched.hasOwnProperty('acceptPrivacy')
                                 ? "inherit": null
                             }}
                         >privacy policy</Link> gelezen.<sup>*</sup>
                       </Typography>
                   }}
                 />
                 <LoadingButton
                   className={classes.submit}
                   variant="contained"
                   color="secondary"
                   size="medium"
                   type="submit"
                   loading={isSubmitting}
                 >
                   Activeer
                 </LoadingButton>
               </Form>
            )}
        </Formik>
    )
}

export default ActivateForm;
