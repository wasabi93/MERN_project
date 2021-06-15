import { fade,makeStyles } from '@material-ui/core/styles'

const drawerWidth = 0;

const useStyles = makeStyles((theme) => ({
    appBar: {
      boxShadow: 'none',
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    iconButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    toolbar: {
        minHeight: '20px',
        backgroundColor: 'black',
        justifyContent: 'flex-end'
    },
    toolbar1: {
        backgroundColor: 'white',
        maxHeight: '40px',
    },
    toolbar2: {
        minHeight: '20px',
        backgroundColor: 'black',
    },
    grow: {
        flexGrow: 1,
    },
    outGrow: {
        width: '12%',
    },
    image: {
        height: '60px',
        display: 'block',
        marginRight: '10px',
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.black, 0.65),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.black, 0.85),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(5)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '26ch'
      },
    },
    typoColor: {
        color: 'white',
        textDecoration: 'none',
        padding: '0 10px',
        borderRadius: '5px',
        border: '1px solid black',
        '&:hover': {
            border: "1px solid white",
          }
    },
    divCart: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }
  }));

export default useStyles