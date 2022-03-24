import React from "react";
import AppBar from "@material-ui/core/AppBar";
import {
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  logo: {
    maxWidth: 160,
    height: 40
  },
  center: {
    margin: "auto",
    width: "80%",
    justifyContent: "space-between",

  },
  title: {
    marginLeft: 20,
    marginTop: 10
  },
  subTitle: {
    fontSize: 16,
    marginLeft: 20,
    marginTop: 10
  }
});

const Navbar = ({matchesCount}) => {

  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" style={{ flexFlow: 1, backgroundColor: "#7158e2" }}>
        <Toolbar className={classes.center}>
          <img src={require("../img/logo.png")} alt="logo" className={classes.logo} />
          <Typography className={classes.title}><b style={{fontSize: "24px"}}>Score Card</b></Typography>
        <Typography className={classes.subTitle}>Matches: {matchesCount}</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;