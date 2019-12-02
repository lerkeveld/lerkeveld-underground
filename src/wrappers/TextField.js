import React from 'react';
import { fieldToTextField } from 'formik-material-ui';
import MuiTextField from '@material-ui/core/TextField';

function customFieldToTextField(props) {
    const originalHelperText = props.helperText;
    const { helperText, ...rest } = fieldToTextField(props);
    return {
        helperText: originalHelperText,
        ...rest
    };
}

export default function TextField({
    children,
    ...props
}) {
    return <MuiTextField {...customFieldToTextField(props)}>{children}</MuiTextField>
}
