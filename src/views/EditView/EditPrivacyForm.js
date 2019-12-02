import React, { useState, useCallback, useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { CheckboxWithLabel } from 'formik-material-ui';
import * as Yup from 'yup';

import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import LoadingButton from '../../components/LoadingButton';
import Typography from '@material-ui/core/Typography';

import useFetch from '../../hooks/useFetch';
import useFormikSubmit from '../../hooks/useFormikSubmit';
import useEnqueueSnackbar from '../../hooks/useEnqueueSnackbar';
import useLoadingSnackbar from '../../hooks/useLoadingSnackbar';

// FORM SCHEMA
const SCHEMA = Yup.object().shape({isSharing: Yup.bool()});

const ProfileLink = React.forwardRef((props, ref) => <Link to="/profiel" {...props} ref={ref} />);

function EditPrivacyForm(props) {

    const [isSharing, setIsSharing] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    // FETCHING
    const fetchRequest = useFetch(
        {method: 'GET', path: '/user/profile'},
        useCallback((data) => {
            const { user = {} } = data;
            const { is_sharing = false } = user;
            setIsSharing(is_sharing);
        }, []),
    );
    useEffect(() => {
        setErrorMessage(fetchRequest.errorMessage);
    }, [fetchRequest.errorMessage])

    const onSubmit = useFormikSubmit(
        useCallback((values, actions) => {
            setErrorMessage(null);
            return {
                method: 'POST',
                path: '/user/edit',
                data: {
                    is_sharing: values.isSharing,
                },
            }
        }, []),
        useCallback((data, actions) => {
            props.history.push('/profiel');
        }, [props.history]),
        useCallback((reason, actions) => {setErrorMessage(reason);}, [])
    );

    useEnqueueSnackbar(errorMessage);
    useLoadingSnackbar(fetchRequest.isFetching);

    return (
        <>
          <Typography variant="subtitle2">
            Wijzig privacy settings
          </Typography>
          <Formik
              initialValues={{isSharing: isSharing}}
              enableReinitialize={true}
              onSubmit={onSubmit}
              validationSchema={SCHEMA}
          >
              {({ isSubmitting, errors, touched }) => (
                <Form noValidate>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox checked disabled />}
                      label={
                        <Typography variant="body2">
                          Ik deel mijn voor- en achternaam met alle Lerkies
                        </Typography>
                      }
                    />
                    <FormControlLabel
                      control={<Checkbox checked disabled />}
                      label={
                        <Typography variant="body2">
                          Ik deel mijn kamernummer en gang met alle Lerkies
                        </Typography>
                      }
                    />
                    <Field
                      name="isSharing"
                      component={CheckboxWithLabel}
                      Label={{label:
                        <Typography variant="body2">
                          Ik deel mijn contactgegevens met alle Lerkies
                        </Typography>
                      }}
                      disabled={fetchRequest.isFetching}
                      indeterminate={fetchRequest.isFetching}
                    />
                  </FormGroup>
                  <div style={{marginTop: '8px', display: 'flex'}}>
                    <LoadingButton
                      variant="contained"
                      color="primary"
                      size="small"
                      type="submit"
                      style={{marginRight: "8px"}}
                      loading={isSubmitting}
                      disabled={fetchRequest.isFetching}
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

export default withRouter(EditPrivacyForm);
