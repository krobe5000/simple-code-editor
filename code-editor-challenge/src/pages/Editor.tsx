import React from "react";
import { FileExplorer } from "../components/FileExplorer";
import EditorWindow from "../components/EditorWindow";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Link } from "react-router-dom";

const Editor = () => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link to="/">
              <Typography color="primary">Home</Typography>
            </Link>
            <Link to="/viewEditor">
              <Typography color="primary">View Editor</Typography>
            </Link>
          </Breadcrumbs>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3">Editor page</Typography>
        </Grid>
        <Grid item xs={3}>
          <FileExplorer />
        </Grid>
        <Grid item xs={9}>
          <EditorWindow />
        </Grid>
      </Grid>
    </>
  );
};

export default Editor;
