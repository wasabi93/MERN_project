import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
    // popup: {
    //   position: 'fixed',
    //   top: '0',
    //   left: '0',
    //   width: '100%',
    //   height: '100%',
    //   backgroundColor: 'rgba(0,0,0,0.1)',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   zIndex: '1000'
    // },
    // inner: {
    //   position: 'relative',
    //   top: '10%',
    //   maxWidth: "70%",
    //   margin: '0 auto',
    //   padding: 15,
    //   zIndex: '1001',
    //   backgroundColor: 'white',
    // },
    // blocker: {
    //   position: "fixed",
    //   top: '0',
    //   left: "0",
    //   bottom: "0",
    //   right: "0",
    //   content: ' ',
    //   background: "rgba(0,0,0,.5)",
    // },
    // container: {
    //   display: "flex",
    //   width: '100%',
    //   height: '100%',
    // },
   
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      maxWidth: "70%",
    },
    paper: {
      position: 'relative',
      left: '20%',
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      display: 'flex',
    },
    leftImg: {
      display: 'block',
    },
    left: {
      width: "65%",
      position: "relative",
      paddingRight: 10,
    },
    right: {
      width: '35%',
      position: "relative",
    },
    price: {
      display: 'flex',
      alignItems: 'center',
    }
  }));

export default useStyles