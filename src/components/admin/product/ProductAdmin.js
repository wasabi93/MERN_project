import React, {useState} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';

import useStyles from './styles';
import Popup from '../../popup/Popup';
import { deleteProduct } from '../../../actions/products';

export default function ProductAdmin({ product, setCurrentId }) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [btnPopup, setBtnPopup] = useState(false)
  
    return (<>
    <Grid>
      <div className={classes.center}>
      <Card className={classes.root} >
        <CardActionArea>
          <CardMedia
            component="img"
            alt={product.name}
            height="160"
            image={product.url}
            onClick={() => setBtnPopup(true)}
          />
        </CardActionArea>
        <div className>
            <Button style={{ color: 'blue' }} size="small" onClick={() => setCurrentId(product._id)}>Edit</Button>
            <Button size="small" color="primary" onClick={() => dispatch(deleteProduct(product._id))}><DeleteIcon fontSize="small" /> Delete</Button>
        </div>
        <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="body1" component="body" >
              {product.name}
            </Typography>
        </CardContent>
        <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="body1" component="body" >
              {product.description}
            </Typography>
        </CardContent>
        <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="body1" component="body" >
              {product.album}
            </Typography>
        </CardContent>
        <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="body1" component="body" >
              {product.type}
            </Typography>
        </CardContent>
        <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="body1" component="body" >
              {product.price}
            </Typography>
        </CardContent>
      </Card>
      </div>
    </Grid>
    <Popup trigger={btnPopup} onClick={() => setBtnPopup(false)}/>
    </>
    );
  }