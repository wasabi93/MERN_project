import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid'
import { useSelector } from 'react-redux';

import Product from './product/Product'
import useStyles from './styles';


export default function Products({setCurrentId, onProductPick}) {
    const products = useSelector((state) => state.products)

    if (!products) {
        return null
    }

    return (
        <Grid container spacing={3}>
                {products.map((product) => {
                    return (
                        <Grid key={product._id} item xs={12} sm={3}>
                            <Product product={product} setCurrentId={setCurrentId} onProductPick={onProductPick}></Product>
                        </Grid>
                    );
                })}
        </Grid>
        
    )
}