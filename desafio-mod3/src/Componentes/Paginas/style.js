import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    card: {
      borderRadius: 16,
      boxShadow: "0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12)",
      padding: "70px",
    },
    columns: {
      display: "flex",
      flexDirection: "column",
      gap: 38
    },
    button:{
      width: "max-content",
      margin: 40
    }
    
});

export default useStyles;