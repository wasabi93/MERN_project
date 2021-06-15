import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

import useStyles from './styles'

export default function Selector2() {
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
          <option value={0}>Mức giá</option>
          <option value={1}>500.000-1.000.000</option>
          <option value={2}>1.000.000-1.500.000</option>
        </NativeSelect>
      </FormControl>
    )
}
