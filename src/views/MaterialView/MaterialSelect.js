import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import * as utils from '../../utils';


function MaterialSelect({
    reservations = [],
    items = [],
    selectedDate = null,
    field = {},
    form = {},
    disabled = true,
    ...props
}) {
    const { setFieldValue } = form;
    const error = form.errors.hasOwnProperty(field.name) && form.touched.hasOwnProperty(field.name);

    const reserved = new Set();
    reservations.forEach(reservation => {
      if (utils.serializeDate(selectedDate) === utils.serializeDate(reservation["date"])) {
        reservation.items.forEach(item => {
            reserved.add(item.id);
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
            MenuProps={{
              getContentAnchorEl: null,
              anchorOrigin: {
                vertical: "bottom",
                horizontal: "left",
              }
            }}
            multiple
            disabled={disabled}
            value={field.value}
            error={error}
            input={<Input id="select-multiple" />}
            renderValue={selected => selected.map(item => item.name).join(', ')}
            onChange={(event) => {setFieldValue(field.name, event.target.value)}}
          >
            <MenuItem disabled value="">
              Kies Materialen:
            </MenuItem>
            { items.map(item => (
                <MenuItem
                  key={item.id}
                  value={item}
                  style={{paddingLeft: 0}}
                  disabled={reserved.has(item.id)}
                >
                  <Checkbox
                    color="primary"
                    checked={field.value.map(item => item.id).includes(item.id)}
                    indeterminate={reserved.has(item.id)}
                  />
                  <ListItemText primary={item.name} style={{paddingLeft: 0}}/>
                </MenuItem>
            ))}
          </Select>
        </FormControl>
    );
}

export default MaterialSelect;
