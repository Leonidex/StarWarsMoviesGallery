import {
  CircularProgress,
  Grid,
  MenuItem,
  Paper,
  Select,
  TextField,
} from "@mui/material";
import styles from "./explorer.module.css";
import { filmsAtom } from "../../lib/store/atoms";
import { useAtom } from "jotai";
import { Pane } from "./pane";
import { useCallback, useEffect, useState } from "react";
import { fetchFilmsAtom } from "../../lib/store/actions";
import { FilmList } from "./film-list/film-list";
import { Center } from "../basic/center";
import { FilmView } from "./film-view/film-view";
import { Film } from "../../lib/types";
import {
  filterArrayOfObjects,
  sortArrayOfObjects,
} from "../../lib/utils/array";
import { toPascalCase } from "../../lib/utils/string";

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

  const [searchTerm, setSearchTerm] = useState("");
  const filterFilms = useCallback(
    (_films: Film[]) => {
      if (searchTerm) {
        return filterArrayOfObjects(_films, searchTerm);
      } else {
        return _films;
      }
    },
    [searchTerm],
  );

  const [sortField, setSortField] = useState(null);
  const sortFilms = useCallback(
    (_films: Film[]) => {
      if (sortField) {
        return sortArrayOfObjects(_films, sortField);
      } else {
        return _films;
      }
    },
    [sortField],
  );

  return (
    <Paper square className={styles.explorer_container}>
      <Grid container columns={4}>
        <Grid item xs={1}>
          <Select
            className={styles.explorer_item}
            value={sortField}
            placeholder={"Sort by..."}
          >
            {Object.keys(films[0]).map((key) => (
              <MenuItem value={key}>{toPascalCase(key)}</MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={3}>
          <TextField
            value={searchTerm}
            className={styles.explorer_item}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
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
              <FilmList films={sortFilms(filterFilms(films))} />
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
