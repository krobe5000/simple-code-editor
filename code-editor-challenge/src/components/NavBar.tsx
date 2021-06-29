import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { LoginLogoutButton } from "./LoginLogoutButton";
import Profile from "../components/Profile";
import Grid from "@material-ui/core/Grid";
import OpenWorkspaceButton from "./OpenWorkspaceButton";

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container spacing={3}>
          <Grid item xs={12} />
          <Grid item xs={4} />
          <Grid item xs={2}>
            <OpenWorkspaceButton />
          </Grid>
          <Grid item xs={2}>
            <LoginLogoutButton />
          </Grid>
          <Grid item xs={2}>
            <Profile />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
