import {
  CircularProgress,
  Grid,
  Paper,
  Select,
  TextField,
} from "@mui/material";
import styles from "./explorer.module.css";
import { filmsAtom } from "../../store/atoms";
import { useAtom } from "jotai";
import { Pane } from "./pane";
import { useEffect, useState } from "react";
import { fetchFilmsAtom } from "../../store/actions";
import { FilmList } from "./film-list/film-list";
import { Center } from "../basic/center";
import { FilmView } from "./film-view/film-view";

interface Props {}

export const Explorer = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [, fetchFilms] = useAtom(fetchFilmsAtom);

  useEffect(() => {
    setIsLoading(true);
    fetchFilms()
      .then(() => setIsLoading(false))
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, []);

  const [films] = useAtom(filmsAtom);

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
      <Grid flexGrow={1} spacing={0.5} container columns={{ xs: 1, md: 2 }}>
        <Grid item xs={1}>
          <Pane>
            {isLoading ? (
              <Center>
                <CircularProgress />
              </Center>
            ) : (
              <FilmList films={films} />
            )}
          </Pane>
        </Grid>
        <Grid item xs={1}>
          <Pane>
            <FilmView />
          </Pane>
        </Grid>
      </Grid>
    </Paper>
  );
};
