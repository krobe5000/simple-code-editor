import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import NavBar from "./NavBar";

const renderComponent = () => {
  return render(<NavBar />);
};

test("Should render some buttons", () => {
  const container = renderComponent();

  expect(container).toMatchSnapshot();
});
