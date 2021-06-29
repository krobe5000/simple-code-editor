import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "@material-ui/core/Button";

interface useAuth0Props {
  loginWithRedirect: () => void;
  logout: () => void;
  isAuthenticated?: boolean;
}

export const LoginLogoutButton = () => {
  const { loginWithRedirect, logout, isAuthenticated }: useAuth0Props =
    useAuth0();

  return isAuthenticated ? (
    <Button variant="contained" color="secondary" onClick={logout}>
      Log Out
    </Button>
  ) : (
    <Button variant="contained" color="secondary" onClick={loginWithRedirect}>
      Log In
    </Button>
  );
};
