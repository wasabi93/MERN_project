import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton';
import { Typography, Paper, TextField } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import useStyles from './styles'

export default function Cart({cart, onProductDelete}) {
    const classes = useStyles();
    const [info,setInfo] = React.useState({ name: '', phone: '', date: '', location: ''})

    return(
        <main>
            <Container maxWidth='md'>
                <Paper className={classes.paper}>
                    <form autoComplete="off" noValidate className={`${classes.rootForm} ${classes.form}`} >
                        <div className={classes.root}>
                            <GridList className={classes.gridList} cols={3}>
                                {cart.length > 0 && cart.map((product) => (
                                <GridListTile key={product._id}>
                                    <img src={product.url} alt={product.name} className={classes.fadeOut}/>
                                    <GridListTileBar
                                    title={product.name}
                                    classes={{
                                        root: classes.titleBar,
                                        title: classes.title,
                                    }}
                                    actionIcon={
                                        <IconButton aria-label={product.name}>
                                          <CloseIcon className={classes.title} onClick={() => onProductDelete(product)}/>
                                        </IconButton>
                                      }
                                    />
                                    
                                </GridListTile>
                                ))}
                            </GridList>
                        </div>
                        <TextField name="phone" variant="outlined" label="Số Điện Thoại" type='tel' fullWidth/>
                        <TextField name="email" variant="outlined" label="Email" type='email' fullWidth/>
                        <TextField name="date" variant="outlined" label='Ngày/Giờ' type='text' fullWidth/>
                        <TextField name="location" variant="outlined" label='Địa điểm' type='text' fullWidth/>
                        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                        <Button variant="contained" color="secondary" size="small" fullWidth>Clear</Button>
                    </form>
                </Paper>
            </Container>
        </main>
    )
}