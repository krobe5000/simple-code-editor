import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { LoginLogoutButton } from "./LoginLogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import { mocked } from "ts-jest/utils";

jest.mock("@auth0/auth0-react");
const mockedAuth = mocked(useAuth0);

const auth0MockedResponse = {
  isAuthenticated: true,
  getAccessTokenSilently: jest.fn(),
  getAccessTokenWithPopup: jest.fn(),
  getIdTokenClaims: jest.fn(),
  loginWithRedirect: jest.fn(),
  loginWithPopup: jest.fn(),
  logout: jest.fn(),
  buildAuthorizeUrl: jest.fn(),
  buildLogoutUrl: jest.fn(),
  handleRedirectCallback: jest.fn(),
  isLoading: false,
};

const renderComponent = () => {
  return render(<LoginLogoutButton />);
};

describe("Authenticated User", () => {
  beforeEach(() => {
    mockedAuth.mockReturnValue({ ...auth0MockedResponse });
  });

  test("Should see Logout button", () => {
    renderComponent();

    expect(screen.getByText(/log out/i)).toBeInTheDocument();
    expect(screen.queryByText(/log in/i)).toBe(null);
  });
});

describe("Unauthenticated User", () => {
  beforeEach(() => {
    mockedAuth.mockReturnValue({
      ...auth0MockedResponse,
      isAuthenticated: false,
    });
  });

  test("Should see Login button", () => {
    renderComponent();

    expect(screen.getByText(/log in/i)).toBeInTheDocument();
    expect(screen.queryByText(/log out/i)).toBe(null);
  });
});
