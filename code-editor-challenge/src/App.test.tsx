import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { mocked } from "ts-jest/utils";
import { useAuth0 } from "@auth0/auth0-react";

// jest.mock("@auth0/auth0-react");
// const mockedAuth = mocked(useAuth0);

const renderComponent = () => {
  return render(<App />);
};

test("Should render the home page initially", () => {
  renderComponent();
  expect(screen.getByText(/home page/i)).toBeInTheDocument();
});

interface Auth0Props {
  isAuthenticated: boolean;
  getAccessTokenSilently: () => void;
  getAccessTokenWithPopup: () => void;
  getIdTokenClaims: () => void;
  loginWithRedirect: () => void;
  loginWithPopup: () => void;
  logout: () => void;
  buildAuthorizeUrl: () => void;
  buildLogoutUrl: () => void;
  handleRedirectCallback: () => void;
  isLoading: boolean;
}

test("Should not allow unauthenticated user to see the editor", () => {
  // mockedAuth.mockImplementation(() => ({
  //   isAuthenticated: false,
  //   getAccessTokenSilently: () => Promise<string>,
  //   getAccessTokenWithPopup: () => Promise<string>,
  //   getIdTokenClaims: () => Promise<IdToken>,
  //   loginWithRedirect: () => {},
  //   loginWithPopup: () => {},
  //   logout: () => {},
  //   buildAuthorizeUrl: () => Promise<string>,
  //   buildLogoutUrl: () => '',
  //   handleRedirectCallback: () => Promise<RedirectUriCallback>,
  //   isLoading: false,
  // }));
  renderComponent();
  fireEvent.click(screen.getByText(/view editor/i));
  expect(screen.queryByText(/editor page/i)).not.toBeInTheDocument();
  expect(screen.getByText(/home page/i)).toBeInTheDocument();
});
