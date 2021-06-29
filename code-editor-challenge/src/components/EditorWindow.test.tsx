import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import EditorWindow from "./EditorWindow";
import { EditorContext } from "../state/EditorContext";

// interface MockFile {
//   name: string;
//   body: string;
// }

// const createMockFile = (file: MockFile): File => {
//   const blob = new Blob([file.body], { type: "text/plain" }) as any;
//   blob["lastModifiedDate"] = new Date();
//   blob["name"] = file.name;
//   return blob as File;
// };

// const renderComponent = () => {
//   return render(
//     <EditorContext.Provider
//       value={{
//         currentFile: [createMockFile({ name: "FileA", body: "FileAContents" })],
//         updateCurrentFile: jest.fn(),
//         removeFile: jest.fn(),
//       }}
//     >
//       <EditorWindow />
//     </EditorContext.Provider>
//   );
// };

// test("Should render an editor window", () => {
//   renderComponent();
// });

test("Monaco Editor does not work well with Jest", () => {});
