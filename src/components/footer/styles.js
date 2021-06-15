import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles(() => ({
    center: {
      justifyContent: 'center',
      backgroundColor: 'rgba(100, 100, 90, 0.87)',
      minHeight: '20px'
    },
    border: {
      marginTop: '5px',
    },
    noPadding: {
      padding: '0',
    }
  }));

export default useStyles