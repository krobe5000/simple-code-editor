import React from "react";

import { useAuth0 } from "@auth0/auth0-react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Home from "./pages/Home";
import Editor from "./pages/Editor";
import { FileContext } from "./state/FileContext";
import { EditorContext } from "./state/EditorContext";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  const [files, setFiles] = React.useState<FileList | null>(null);
  const [editorValue, setEditorValue] = React.useState<File[]>([
    new File([""], ""),
  ]);

  const { isLoading, isAuthenticated } = useAuth0();

  if (isLoading) <div>Loading...</div>;

  return (
    <FileContext.Provider
      value={{
        files,
        updateFiles: (file: FileList) => {
          return setFiles(file);
        },
      }}
    >
      <EditorContext.Provider
        value={{
          currentFile: editorValue,
          updateCurrentFile: (val: File) =>
            setEditorValue((prev) => [...prev, val]),
          removeFile: (fileName: string) =>
            setEditorValue((prev) =>
              prev.filter(({ name }) => name !== fileName)
            ),
        }}
      >
        <Router>
          <NavBar />
          <div style={{ padding: "1rem", margin: "1rem" }}>
            <Switch>
              <Route
                path="/viewEditor"
                exact
                render={({ location }) =>
                  isAuthenticated ? (
                    <Editor />
                  ) : (
                    <Redirect
                      to={{ pathname: "/", state: { from: location } }}
                    />
                  )
                }
              />
              <Route path="/" exact>
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </EditorContext.Provider>
    </FileContext.Provider>
  );
}

export default App;
