import React from 'react';
import { Container, Toolbar, Grid, Button } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Products from '../../components/products/Products'
import useStyles from './styles'

export default function Album() {
    const classes = useStyles()

    return(
        <main>
            <Container maxWidth='md'>
                <Toolbar className={classes.spacing}>
                    <Button variant="contained" color="primary" className={classes.btn}>
                        Bếp
                    </Button>
                    <Button variant="contained" color="primary" className={classes.btn}>
                        Cầu thang
                    </Button>
                    <Button variant="contained" color="primary" className={classes.btn}>
                        Mặt tiền
                    </Button>
                    <Button variant="contained" color="primary" className={classes.btn}>
                        Khác
                    </Button>
                </Toolbar>
                <Container maxWidth="md">
                    <Products />
                </Container>
            </Container>
        </main>
    )
}