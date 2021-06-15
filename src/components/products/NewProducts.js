import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid'

import NewProduct from './product/NewProduct'
import useStyles from './styles';


export default function Products() {
    const [products,setProducts] = useState([])
    const classes = useStyles();

    return (
        <Grid container spacing={0}>
            <Grid container spacing={2} >
                <NewProduct />
                <NewProduct />
                <NewProduct />
            </Grid>
        </Grid>
        // {products.map((product) => {
        //     return (
        //       <Product key={product.id} details={product}></Product>
        //     );
        // })}
    )
}