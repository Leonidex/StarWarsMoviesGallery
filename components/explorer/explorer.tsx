import {
  CircularProgress,
  Grid,
  Paper,
  Select,
  TextField,
} from "@mui/material";
import styles from "./explorer.module.css";
import { moviesAtom } from "../../store/atoms";
import { useAtom } from "jotai";
import { Pane } from "./pane";
import { useEffect, useState } from "react";
import { fetchMoviesAtom } from "../../store/actions";
import { MovieList } from "./movie-list/movie-list";
import { Center } from "../basic/center";
import { MovieView } from "./movie-view/movie-view";

interface Props {}

export const Explorer = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [, fetchMovies] = useAtom(fetchMoviesAtom);

  useEffect(() => {
    setIsLoading(true);
    fetchMovies()
      .then(() => setIsLoading(false))
      .catch(console.error);
  }, []);

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
          <Pane>
            {isLoading ? (
              <Center>
                <CircularProgress />
              </Center>
            ) : (
              <MovieList movies={movies} />
            )}
          </Pane>
        </Grid>
        <Grid item xs={1}>
          <Pane>
            <MovieView />
          </Pane>
        </Grid>
      </Grid>
    </Paper>
  );
};
