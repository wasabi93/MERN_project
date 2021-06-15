import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

import useStyles from './styles'

export default function Selector1() {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return(
        <FormControl>
        <NativeSelect
          id="demo-customized-select-native"
          value={age}
          onChange={handleChange}
          variant='standard'
          placeholder='Giá'
        >
          <option value={1}>Giá cao đến thấp</option>
          <option value={2}>Giá thấp đến cao</option>
        </NativeSelect>
      </FormControl>
    )
}
