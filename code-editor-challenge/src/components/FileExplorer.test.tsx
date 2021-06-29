import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { FileExplorer } from "./FileExplorer";
import { FileContext } from "../state/FileContext";

interface MockFile {
  name: string;
  body: string;
}

const createMockFile = (file: MockFile): File => {
  const blob = new Blob([file.body], { type: "text/plain" }) as any;
  blob["lastModifiedDate"] = new Date();
  blob["name"] = file.name;
  return blob as File;
};

const currentFile = {
  0: createMockFile({ name: "FileA", body: "fileAContents" }),
  1: createMockFile({ name: "FileB", body: "fileBContents" }),
  length: 2,
  item: (index: number) => {
    const name = index === 1 ? "FileA" : "FileB";
    return createMockFile({ name, body: `${name}Contents` });
  },
} as unknown as FileList;

const renderComponent = () => {
  return render(
    <FileContext.Provider
      value={{
        files: currentFile,
        updateFiles: jest.fn(),
      }}
    >
      <FileExplorer />
    </FileContext.Provider>
  );
};

test("Should render a tree component of files", async () => {
  renderComponent();

  await waitFor(() => expect(screen.getByText("FileA")).toBeInTheDocument());
  expect(screen.getByText("FileB")).toBeInTheDocument();
});
