import React from "react";
import MonacoEditor from "react-monaco-editor";
import { EditorContext, EditorContextProps } from "../state/EditorContext";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const EditorWindow = () => {
  const options = {
    selectOnLineNumbers: true,
    roundedSelection: false,
    readOnly: false,
    // cursorStyle: "line",
    automaticLayout: false,
  };

  const editorContent = React.useContext<EditorContextProps>(EditorContext);

  const [currEditorContents, setCurrEditorContents] = React.useState("");

  const viewFile = async (fileObject: File) => {
    const reader = new FileReader();
    reader.onabort = () => console.log("Aborted");
    reader.onerror = (e) => console.log("error", e);
    reader.onload = async () => {
      const calculatedStr = await reader.result;

      if (typeof calculatedStr == "string") {
        setCurrEditorContents(calculatedStr);
      }
    };

    reader.readAsText(fileObject);
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
    viewFile(editorContent.currentFile[newValue + 1]);
  };

  return (
    <>
      {/* <AppBar position="static" color="secondary"> */}
      <div style={{ backgroundColor: "#b3b4b5" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="editor tabs"
          textColor="primary"
        >
          {editorContent.currentFile.map(({ name }) =>
            name !== "" ? (
              <Tab
                key={name}
                label={
                  <div style={{ display: "inline-block" }}>
                    {name}{" "}
                    <div
                      style={{ display: "inline-block", color: "red" }}
                      onClick={() => {
                        editorContent.removeFile(name);
                        setCurrEditorContents("");
                      }}
                    >
                      X
                    </div>
                  </div>
                }
              />
            ) : null
          )}
        </Tabs>

        <MonacoEditor
          height="400"
          language="javascript"
          value={currEditorContents}
          options={options}
          // onChange={(newVal: string) => setCode((prev) => [...prev, newVal])}
          theme="vs-dark"
        />
      </div>
      {/* </AppBar> */}
    </>
  );
};

export default EditorWindow;
