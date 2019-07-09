import React from 'react';
import { DatePicker } from '@material-ui/pickers/DatePicker';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';

import Event from '@material-ui/icons/Event';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';


function MaterialDatePicker(props) {
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
        {...props}
      />
  );
}

export default MaterialDatePicker;
