import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

interface Auth0Props {
  user?: any;
  isAuthenticated?: boolean;
}

const Profile = () => {
  const { user, isAuthenticated }: Auth0Props = useAuth0();

  return isAuthenticated ? (
    <Grid>
      <Grid item xs={12} alignContent="center">
        <Avatar src={user.picture} alt={user.name} />
        <Typography variant="h5">{user.name}</Typography>
      </Grid>
    </Grid>
  ) : null;
};

export default Profile;
