import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 50px",
    [theme.breakpoints.down("sm")]: {
      margin: "30px 0",
      display: "flex",
      flexDirection: "row",
      padding: "2px 5px",
    },
  },
  Icon: {
    height: "50px",
    [theme.breakpoints.down("sm")]: {
      height: "25px",
    },
  },
  heading: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    fontSize: "2em",
    fontWeight: 300,
  },
  image: {
    marginLeft: "10px",
    marginTop: "5px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "400px",
    [theme.breakpoints.down("sm")]: {
      width: "250px",
    },
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    width: "300px",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "space-evenly",
      width: "100px",
    },
  },
  logout: {
    marginLeft: "20px",
    [theme.breakpoints.down("sm")]: {
      margin: "0px",
      fontSize: "10px",
      marginLeft: "2px",
    },
  },
  userName: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      visibility: "hidden",
      fontSize: "1px",
    },
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    [theme.breakpoints.down("sm")]: {
      height: "25px",
      width: "25px",
      marginLeft: "3px",
    },
  },
}));
