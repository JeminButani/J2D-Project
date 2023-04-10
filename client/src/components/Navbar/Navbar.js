import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppBar, Avatar, Toolbar, Typography, Button } from "@material-ui/core";
import memoriesLogo from "../../Images/memories-Logo.png";
import memoriesText2 from "../../Images/memoriesText2.png";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import decode from "jwt-decode";

const Navbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const logout = () => {
    dispatch({ type: "LOGOUT" });

    navigate("/");

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Link
        to="/"
        className={classes.brandContainer}
        style={{ textDecoration: "none", color: "Black" }}
      >
        {" "}
        {/* <img src={memoriesText2} alt="icon" height="50px"className={classes.Icon} /> */}
        J2D Knowledge Base
        {/* <img
          className={classes.image}
          src={memoriesLogo}
          alt="icon"
          height="40px"
        /> */}
      </Link>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user.result.name}
              src={user.result.imageUrl}
            >
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant="h6">
              {user.result.name}
            </Typography>
            <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
              onClick={logout}
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
