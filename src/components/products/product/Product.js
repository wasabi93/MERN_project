import React, {useState} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import useStyles from './styles';
import Popup from '../../popup/Popup';
import SuccessAlert from '../../alert/SuccessAlert'

export default function Product({ product, setCurrentId, onProductPick }) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [success, setSuccess] = useState(false)

    const handleOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    const handleOpenSuccess = () => {
      setSuccess(true)
    }
    
    const handleCloseSuccess = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setSuccess(false);
    }

    return (
    <>
      <Grid>
        <div className={classes.center}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt={product.name}
              height="160"
              image={product.url}
              onClick={handleOpen}
            />
          </CardActionArea>
          <CardContent>
                {product.description}
          </CardContent>
          <Button size="small" className={classes.button} onClick={() => {onProductPick(product);handleOpenSuccess()}}>
            Chọn
          </Button>
        </Card>
        </div>
      </Grid>
      <Popup
        open={open}
        handleClose={handleClose}
        product={product}
        onProductPick={onProductPick}
      />
      <SuccessAlert 
        success={success}
        handleCloseSuccess={handleCloseSuccess}
      >
        Thêm vào giỏ hàng thành công
      </SuccessAlert>
    </>
    );
  }