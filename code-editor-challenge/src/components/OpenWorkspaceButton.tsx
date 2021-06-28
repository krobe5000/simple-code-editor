import React from "react";
import { FileContext, FileContextProps } from "../state/FileContext";

const OpenWorkspaceButton = () => {
  const fileContext = React.useContext<FileContextProps>(FileContext);

  return (
    <>
      <label
        htmlFor="filePicker"
        style={{
          color: "#fff",
          backgroundColor: "#f50057",
          padding: "10px 16px",
          // marginTop: "20px",
          boxShadow:
            "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
          borderRadius: "4px",
          fontFamily: "Roboto, Helvetica, Arial, sans-serif",
          fontSize: "0.875rem",
          fontWeight: "bold",
          minWidth: "64px",
          boxSizing: "border-box",
          height: "36px",
          // width: "100%",
          cursor: "pointer",
          display: "inline-flex",
        }}
      >
        Open Workspace
      </label>
      <input
        id="filePicker"
        type="file"
        accept=".tsx .ts .pdf .json"
        style={{ opacity: 0 }}
        // @ts-expect-error
        directory=""
        webkitdirectory=""
        onChange={(event) => {
          const target = event.target as HTMLInputElement;
          const files = target.files;
          fileContext?.updateFiles(files);
        }}
      />
    </>
  );
};

export default OpenWorkspaceButton;
