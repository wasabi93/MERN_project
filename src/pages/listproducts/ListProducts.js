import React from 'react';
import { Container, Toolbar } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search'

import Products from '../../components/products/Products'
import useStyles from './styles'
import Selector1 from './Selector1'
import Selector2 from './Selector2'
import Selector3 from './Selector3'


export default function ListProducts() {
    

    const classes = useStyles();

    return(
        <main>
            <Container maxWidth='md'>
                <Toolbar className={classes.spacing}>
                    <Selector1 />
                    <Selector2 />
                    <Selector3 />
                    <Button type='submit' className={classes.btn}><SearchIcon /></Button>
                </Toolbar>
                <Container maxWidth="md">
                    <Products />
                </Container>
            </Container>
        </main>
    )
}