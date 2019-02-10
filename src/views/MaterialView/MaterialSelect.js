import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import * as utils from '../../utils';


function MaterialSelect(props) {
  const { reservations, select, items, date, error, ...rest } = props;

  const reserved = new Set();

  reservations.forEach(reservation => {
    if (utils.serializeDate(date) === utils.serializeDate(reservation["date"])) {
      reservation.items.forEach(item => {
          reserved.add(item);
      });
    }
  });

  return (
      <FormControl
        fullWidth
        required
        margin="dense"
      >
        <InputLabel error={error} shrink htmlFor="select-multiple">
          Materiaal
        </InputLabel>
        <Select
          multiple
          value={items}
          error={error}
          input={<Input id="select-multiple" />}
          renderValue={selected => selected.join(', ')}
          {...rest}
        >
          <MenuItem disabled value="">
            Kies Materialen:
          </MenuItem>
          { select.map(name => (
              <MenuItem
                key={name}
                value={name}
                style={{paddingLeft: 0}}
                disabled={reserved.has(name)}
              >
                <Checkbox
                  color="primary"
                  checked={items.includes(name)}
                  indeterminate={reserved.has(name)}
                />
                <ListItemText primary={name} style={{paddingLeft: 0}}/>
              </MenuItem>
          ))}
        </Select>
      </FormControl>
  );
}

MaterialSelect.propTypes = {
  reservations: PropTypes.array.isRequired,
  material: PropTypes.array.isRequired
};

MaterialSelect.defaultProps = {
  reservations: [],
  material: []
}

export default MaterialSelect;
