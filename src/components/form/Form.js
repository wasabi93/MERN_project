import React, { useState } from 'react';
import { Input, Button, Typography, Grid, Container } from '@material-ui/core';

import useStyles from './styles';

const Form = () => {
    const [data, setData] = useState({ phone:'', email:''})

    function handleSubmit(e) {
        e.preventDefault();
    }

    const classes = useStyles();

    return (
        <Container maxWidth="md">
            <Grid className={classes.imageCover}>
                <Typography className={`${classes.padding} + ${classes.typo}`} variant="h6" align='center' >Đăng ký ngay để được tư vấn</Typography>
                <Typography className={`${classes.padding} + ${classes.typo}`} variant="body2" align='center' >Chúng tôi sẽ cử nhân viên tới tận nhà hoặc gặp tại hệ thống các cửa hàng theo lịch đặt trước của quý khách</Typography>
                <form autoComplete="off" noValidate onSubmit={handleSubmit} className={classes.paddingB}>
                    <div className={classes.flexB}>
                        <Input className={classes.textF} placeholder='Phone...' name="phone" type="Phone" value={data.creator} onChange={(e) => setData({ ...data, phone: e.target.value })} />
                        <Input className={classes.textF} placeholder='Email...' name="email" type="Email" value={data.creator} onChange={(e) => setData({ ...data, email: e.target.value })} />
                        <Button className={classes.button} variant="contained"  size="small" type="submit">Submit</Button>
                    </div>      
                </form>
            </Grid>
        </Container>
    );
};

export default Form;