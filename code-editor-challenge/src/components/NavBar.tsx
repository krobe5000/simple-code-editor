import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { LoginLogoutButton } from "./LoginLogoutButton";
import Profile from "../components/Profile";
import Grid from "@material-ui/core/Grid";
import OpenWorkspaceButton from "./OpenWorkspaceButton";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
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
    </div>
  );
}
