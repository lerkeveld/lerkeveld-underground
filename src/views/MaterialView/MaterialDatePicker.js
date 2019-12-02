import React from 'react';
import { DatePicker } from '@material-ui/pickers/DatePicker';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';

import Event from '@material-ui/icons/Event';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';


function MaterialDatePicker({
    field = {},
    form = {},
    disabled = true,
    ...props
}) {
    let maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 4);

    return (
        <DatePicker
          label="Datum"
          fullWidth
          required
          margin="dense"
          InputLabelProps={{
            shrink: true,
          }}
          disablePast
          maxDate={maxDate}
          format='dd/MM/yyyy'
          InputProps={{
            endAdornment: <InputAdornment position="end">
                            <IconButton><Event /></IconButton>
                          </InputAdornment>
          }}
          leftArrowIcon={<KeyboardArrowLeft />}
          rightArrowIcon={<KeyboardArrowRight />}
          disabled={disabled}
          value={field.value}
          onChange={(value) => form.setFieldValue(field.name, value)}
          error={form.errors.hasOwnProperty(field.name) && form.touched.hasOwnProperty(field.name)}
        />
    );
}

export default MaterialDatePicker;
