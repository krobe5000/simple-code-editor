import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

interface Auth0Props {
  user?: any;
  isAuthenticated?: boolean;
}

const Profile = () => {
  const { user, isAuthenticated }: Auth0Props = useAuth0();

  return isAuthenticated ? (
    <>
      <img src={user.picture} alt={user.name} />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      {/* <div>{JSON.stringify(user, null, 2)}</div> */}
    </>
  ) : null;
};

export default Profile;
