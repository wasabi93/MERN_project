
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    button: {
      backgroundColor: "#334",
      color: 'white',
      padding: '3px 10px',
      '&:hover': {
        backgroundColor: '#320',
      }
    },
    center: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    paper: {
      position: 'absolute',
      backgroundColor: '#333',
      height: '100px',
      width: '100px'
    }
});

export default useStyles