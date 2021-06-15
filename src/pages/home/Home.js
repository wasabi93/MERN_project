import { Container } from '@material-ui/core';
import React from 'react';
import { Grid } from "@material-ui/core";

import Slider from '../../components/slider/HomeSlide'
import Products from '../../components/products/Products'
import NewProducts from '../../components/products/NewProducts'
import Form from '../../components/form/Form'
import useStyles from './styles'

export default function Home({ setCurrentId, onProductPick }) {
    const classes = useStyles()

    

    return(<>
        <title>Trang chủ</title>
        <Slider />
        <main className={classes.main}>  
            <Grid container className={classes.gap}> 
            <Container maxWidth="md">
                <Products setCurrentId={setCurrentId} onProductPick={onProductPick}/>
            </Container>
            <Container maxWidth="md">
                <NewProducts />
            </Container>
            <Form />
            </Grid>
        </main>
        </>
    )
}