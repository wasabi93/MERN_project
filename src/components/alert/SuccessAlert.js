import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import useStyles from "./styles";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

export default function SuccessAlert(props) {
    const {children, handleCloseSuccess, success} = props
    const classes = useStyles()

    return(
        <div className={classes.root}>
            <Snackbar open={success} autoHideDuration={4000} onClose={handleCloseSuccess}>
                <Alert onClose={handleCloseSuccess} severity="success">
                {children}
                </Alert>
            </Snackbar>
        </div>
    )
} 