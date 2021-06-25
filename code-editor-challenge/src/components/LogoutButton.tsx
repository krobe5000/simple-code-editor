import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

interface useAuth0Props {
  logout: () => void;
  isAuthenticated?: boolean;
}

const LogoutButton = () => {
  const { logout, isAuthenticated }: useAuth0Props = useAuth0();

  return isAuthenticated ? <button onClick={logout}>Log Out</button> : null;
};

export default LogoutButton;
