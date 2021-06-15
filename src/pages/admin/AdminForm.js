import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { createProduct, updateProduct } from '../../actions/products';
import useStyles from './styles';

const AdminForm = ({ currentId, setCurrentId }) => {
    const [productData, setProductData] = useState({ name: '', description: '', album: '', type: '', url: '', price: '' });
    const product = useSelector((state) => (currentId ? state.products.find((message) => message._id === currentId) : null));
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        if (product) setProductData(product);
    }, [product]);

    const clear = () => {
        setCurrentId(0);
        setProductData({ name: '', description: '', album: '', type: '', url: '', price: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (currentId === 0) {
        dispatch(createProduct(productData));
        clear();
        } else {
        dispatch(updateProduct(currentId, productData));
        clear();
        }
    };

    return (
        <Paper className={classes.paper}>
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <Typography variant="h6">{currentId ? `Editing "${product.name}"` : 'Creating a Product'}</Typography>
            <TextField name="name" variant="outlined" label="Name" fullWidth value={productData.name} onChange={(e) => setProductData({ ...productData, name: e.target.value })} />
            <TextField name="description" variant="outlined" label="Description" fullWidth multiline rows={2} value={productData.description} onChange={(e) => setProductData({ ...productData, description: e.target.value })} />
            <TextField name="album" variant="outlined" label="Album" fullWidth value={productData.album} onChange={(e) => setProductData({ ...productData, album: e.target.value })} />
            <TextField name="type" variant="outlined" label="Type" fullWidth  value={productData.type} onChange={(e) => setProductData({ ...productData, type: e.target.value })} />
            <TextField name="url" variant="outlined" label="Url" fullWidth value={productData.url} onChange={(e) => setProductData({ ...productData, url: e.target.value})} />
            <TextField name="price" variant="outlined" label="Price" fullWidth value={productData.price} onChange={(e) => setProductData({ ...productData, price: e.target.value})} />
            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
            <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
        </form>
        </Paper>
    )
}

export default AdminForm
