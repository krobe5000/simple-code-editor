import React from "react";

export interface FileContextProps {
  files: FileList | null;
  updateFiles: any;
}

export const FileContext = React.createContext<FileContextProps>({
  files: null,
  updateFiles: () => {},
});
