import React from 'react';
import Grid from '@material-ui/core/Grid'
import { useSelector } from 'react-redux';

import ProductAdmin from './product/ProductAdmin'
import useStyles from './styles';


export default function ProductsAdmin({setCurrentId}) {
    const products = useSelector((state) => state.products)

    return (
        <Grid container spacing={3}>
                {products.map((product) => {
                    return (
                        <Grid key={product._id} item xs={12} sm={4}>
                            <ProductAdmin product={product} setCurrentId={setCurrentId}></ProductAdmin>
                        </Grid>
                    );
                })}
        </Grid>
        
    )
}