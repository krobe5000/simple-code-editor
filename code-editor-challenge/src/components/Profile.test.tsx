import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Profile from "./Profile";
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
  user: { name: "Joe Bloggs", picture: "path/to/image" },
};

const renderComponent = () => {
  return render(<Profile />);
};

const user = { name: "Joe Bloggs", picture: "path/to/image" };

describe("Authenticated User", () => {
  beforeEach(() => {
    mockedAuth.mockReturnValue({ ...auth0MockedResponse, user: { ...user } });
  });

  test("Should see their name and image", () => {
    renderComponent();

    const image = screen.getByAltText(user.name) as HTMLImageElement;

    expect(screen.getByText(user.name)).toBeInTheDocument();
    expect(image.src).toContain(user.picture);
  });
});

describe("Unauthenticated User", () => {
  beforeEach(() => {
    mockedAuth.mockReturnValue({
      ...auth0MockedResponse,
      isAuthenticated: false,
      user: { ...user },
    });
  });

  test("Should see nothing", () => {
    renderComponent();

    expect(screen.queryByText(user.name)).toBe(null);
  });
});
