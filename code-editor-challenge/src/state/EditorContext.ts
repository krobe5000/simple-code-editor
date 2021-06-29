import React from "react";

export interface EditorContextProps {
  currentFile: File[];
  updateCurrentFile: any;
  removeFile: any;
}

export const EditorContext = React.createContext<EditorContextProps>({
  currentFile: [new File([""], "")],
  updateCurrentFile: () => {},
  removeFile: () => {},
});
