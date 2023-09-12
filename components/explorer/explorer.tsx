import { Grid, Paper, Select, TextField } from "@mui/material";
import { Pane } from "./pane";

interface Props {}

export const Explorer = (props: Props) => {
  return (
    <Paper square sx={{ height: "100%", width: "100%" }}>
      <Grid container columns={4}>
        <Grid item xs={1}>
          <Select sx={{ height: "100%", width: "100%" }} />
        </Grid>
        <Grid item xs={3}>
          <TextField value={"hello"} sx={{ height: "100%", width: "100%" }} />
        </Grid>
      </Grid>
      <Grid
        container
        columns={{ xs: 1, md: 2 }}
        sx={{ height: "100%", width: "100%" }}
      >
        <Grid item xs={1}>
          <Pane />
        </Grid>
        <Grid item xs={1}>
          <Pane />
        </Grid>
      </Grid>
    </Paper>
  );
};
