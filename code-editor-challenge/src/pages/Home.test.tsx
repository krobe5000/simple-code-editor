import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import HomePage from "./Home";
import { MemoryRouter as Router } from "react-router";

const renderComponent = () => {
  return render(
    <Router>
      <HomePage />
    </Router>
  );
};

test("Should render the Home Page", () => {
  const container = renderComponent();

  expect(container).toMatchSnapshot();
});
