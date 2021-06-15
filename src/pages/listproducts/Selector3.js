import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

import useStyles from './styles'

export default function Selector3() {
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
          <option value={0}>Loại đá</option>
          <option value={1}>Granite</option>
          <option value={2}>Mable</option>
          <option value={3}>Nhân tạo</option>
        </NativeSelect>
      </FormControl>
    )
}
