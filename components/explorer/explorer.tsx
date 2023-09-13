import { Grid, Paper, Select, TextField } from "@mui/material";
import styles from "./explorer.module.css";
import { moviesAtom } from "../../store/atoms";
import { useAtom } from "jotai";
import { Pane } from "./pane";

interface Props {}

export const Explorer = (props: Props) => {
  const [movies] = useAtom(moviesAtom);

  return (
    <Paper square className={styles.explorer_container}>
      <Grid container columns={4}>
        <Grid item xs={1}>
          <Select className={styles.explorer_item} />
        </Grid>
        <Grid item xs={3}>
          <TextField value={"hello"} className={styles.explorer_item} />
        </Grid>
      </Grid>
      <Grid flexGrow={1} container columns={{ xs: 1, md: 2 }}>
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
