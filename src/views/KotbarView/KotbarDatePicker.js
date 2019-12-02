import React from 'react';
import { DatePicker } from '@material-ui/pickers/DatePicker';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';

import Event from '@material-ui/icons/Event';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';


function KotbarDatePicker({
    field = {},
    form = {},
    disabled = true,
    reservations = [],
    ...props
}) {
    let minDate = new Date();
    minDate.setDate(minDate.getDate() - 1);
    let maxDate = new Date();
    maxDate.setDate(minDate.getDate() + 100);

    const dates = reservations.map(x => x.date);
    const shouldDisableDate = (date) => {
        if (date < minDate || date > maxDate)
          return true;
        return dates.some(taken => {
            return date.getDate() === taken.getDate() &&
                   date.getMonth() === taken.getMonth() &&
                   date.getYear()  === taken.getYear();
        });
    };

    return (
        <DatePicker
          label="Datum"
          fullWidth
          required
          margin="dense"
          InputLabelProps={{
            shrink: true,
          }}
          shouldDisableDate={shouldDisableDate}
          minDate={minDate}
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

export default KotbarDatePicker;
