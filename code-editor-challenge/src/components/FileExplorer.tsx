import React from "react";
import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
import Typography from "@material-ui/core/Typography";
import FolderIcon from "@material-ui/icons/Folder";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import DescriptionIcon from "@material-ui/icons/Description";
import { FileContext, FileContextProps } from "../state/FileContext";
import { EditorContext, EditorContextProps } from "../state/EditorContext";

export const FileExplorer = () => {
  const fileContext = React.useContext<FileContextProps>(FileContext);

  interface ChildNodeProps {
    name: string;
    blob: File;
  }

  const [childNodes, setChildNodes] = React.useState<ChildNodeProps[]>([
    { name: "", blob: new File([""], "") },
  ]);

  const mapFileObject = () => {
    if (fileContext.files !== null) {
      for (var i = 0; i < fileContext.files.length; i++) {
        const file = fileContext.files.item(i);
        setChildNodes((prev) =>
          file?.name === undefined
            ? prev
            : [...prev, { name: file?.name, blob: file }]
        );
      }
    }
  };

  React.useEffect(() => {
    mapFileObject();
  }, [fileContext.files]);

  const editorContent = React.useContext<EditorContextProps>(EditorContext);

  return (
    <TreeView>
      {childNodes.map(({ name, blob }: ChildNodeProps) =>
        name !== "" ? (
          <TreeItem
            nodeId={name}
            onClick={() => editorContent.updateCurrentFile(blob)}
            label={
              <div style={{ display: "inline-block" }}>
                <DescriptionIcon />
                <Typography style={{ display: "inline-block" }}>
                  {name}
                </Typography>
              </div>
            }
          />
        ) : null
      )}
    </TreeView>
  );
};
