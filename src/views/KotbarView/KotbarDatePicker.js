import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'material-ui-pickers/DatePicker';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';

import Event from '@material-ui/icons/Event';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';


function KotbarDatePicker(props) {
    const { reservations, ...rest } = props;

    let maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 4);

    const dates = reservations.map(x => x.date);
    const shouldDisableDate = (date) => {
        return dates.some(taken => {
            return date.getDate()  === taken.getDate() &&
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
          disablePast
          maxDate={maxDate}
          shouldDisableDate={shouldDisableDate}
          format='dd/MM/yyyy'
          InputProps={{
            endAdornment: <InputAdornment position="end">
                            <IconButton><Event /></IconButton>
                          </InputAdornment>
          }}
          leftArrowIcon={<KeyboardArrowLeft />}
          rightArrowIcon={<KeyboardArrowRight />}
          {...rest}
        />
    );
}

KotbarDatePicker.propTypes = {
  reservations: PropTypes.array.isRequired,
};

KotbarDatePicker.defaultProps = {
  reservations: []
};


export default KotbarDatePicker;
