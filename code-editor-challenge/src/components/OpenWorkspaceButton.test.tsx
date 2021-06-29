import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import OpenWorkspaceButton from "./OpenWorkspaceButton";
import { FileContext } from "../state/FileContext";

const updateFileMock = jest.fn();

const renderComponent = () => {
  return render(
    <FileContext.Provider value={{ files: null, updateFiles: updateFileMock }}>
      <OpenWorkspaceButton />
    </FileContext.Provider>
  );
};

test("Should render the button", () => {
  renderComponent();

  expect(screen.getByText(/open workspace/i)).toBeInTheDocument();
});

// test("When the button is clicked, the updateFiles function is called", () => {
//   renderComponent();

//   fireEvent.click(screen.getByText(/open workspace/i));
//   fireEvent.click(screen.getByText(/upload/i));
//   expect(updateFileMock).toHaveBeenCalledTimes(1);
// });
