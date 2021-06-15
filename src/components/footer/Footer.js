
import { Typography, Toolbar, Container } from '@material-ui/core';
import useStyles from './styles';

export default function Footer() {
    const classes = useStyles()
    return(
        <footer position="static" color="white" className={classes.border}>
          <Container className={classes.noPadding}>
            <Toolbar className={classes.center}>
              <Typography variant="body2" color="inherit" align='center'>
              © 2021 HoaCuongLe, All rights reserved. Terms and Conditions of Use Privacy
              </Typography>
            </Toolbar>
          </Container>
        </footer>
    )
}