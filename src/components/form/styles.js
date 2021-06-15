import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles(() => ({
    imageCover: {
        backgroundImage: `url(https://wallpaperaccess.com/full/1091463.jpg)`,
        backgroundSize: "100% auto",
    },
    typo: {
        color: 'white',
    },
    flexB: {
        display: "flex",
        justifyContent: "center",
    },
    textF: {
        border: "1px solid white",
        borderRadius: '5px',
        color: 'white',
        marginRight: '10px',
        paddingLeft: '5px'
    },
    button: {
        backgroundColor: "rgb(150,20,0)",
        color: 'white',
    },
    padding: {
        paddingTop: '20px',
    },
    paddingB: {
        padding: '30px'
    }
  }));

export default useStyles