import React, {useState} from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Typography, Button } from "@material-ui/core";

import useStyles from './styles'

export default function Popup(props) {
    const {product, onProductPick, open, handleClose} = props
    const [pic, setPic] = useState(0)
    const classes = useStyles();

    return (
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
          <div className={classes.left}>
            <img src={product.url} alt={product.name} className={classes.leftImg}
                width="100%"
                maxHeight='70%'
                position="absolute"
                left='0'
                top='0'
                opacity='0'
                transition= 'all 0.3s ease'
            />
          </div>
          <div className={classes.right}>
            <Typography variant='h5'>
              {product.name}
            </Typography>
            <Typography variant='body1'>
              {product.description}
            </Typography>
          
            <div className={classes.price}>
              <Typography variant='body1'>
                {product.price}
              </Typography>
              <Button onClick={() => onProductPick(product)}>Chọn</Button>
            </div>
          </div>
          </div>
        </Fade>
      </Modal>
    )
}