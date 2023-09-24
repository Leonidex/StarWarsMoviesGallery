import {
  Box,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import styles from "./explorer.module.css";
import { filmsAtom } from "../../lib/store/atoms";
import { useAtom } from "jotai";
import { Pane } from "./pane";
import { useCallback, useEffect, useState } from "react";
import { fetchFilmsAtom } from "../../lib/store/actions";
import { FilmList } from "./film-list/film-list";
import { FilmView } from "./film-view/film-view";
import { Film } from "../../lib/types";
import {
  filterArrayOfObjects,
  sortArrayOfObjects,
} from "../../lib/utils/array";
import { toPascalCase } from "../../lib/utils/string";
import SearchIcon from "@mui/icons-material/Search";
import { LoadingScreen } from "./loading/loading-screen";
import { ErrorModal } from "./error-modal";

enum SortKeysEnum {
  episode_id = "episode_id",
  release_date = "release_date",
}

const defaultSortValue = SortKeysEnum.episode_id;

interface Props {}

export const Explorer = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [, fetchFilms] = useAtom(fetchFilmsAtom);

  useEffect(() => {
    setIsLoading(true);
    fetchFilms()
      .then(() => setIsLoading(false))
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
        setIsError(true);
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

  const [sortField, setSortField] = useState(defaultSortValue);
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
      <LoadingScreen isLoading={isLoading} />
      <ErrorModal isError={isError} />
      <Paper elevation={3}>
        <Stack direction={"row"} padding={"2px"} sx={{ gap: "2px" }}>
          <Box sx={{ flexGrow: 1 }}>
            <FormControl className={styles.explorer_item} variant={"outlined"}>
              <InputLabel id="sort-by-label">Sort by</InputLabel>
              <Select
                className={styles.explorer_item}
                labelId="sort-by-label"
                label={"Sort by"}
                value={sortField}
                onChange={(e) => setSortField(e.target.value as SortKeysEnum)}
                data-testid={"sort-select"}
              >
                {Object.keys(SortKeysEnum).map((key) => (
                  <MenuItem value={key} key={`sort-by-menu-item[${key}]`}>
                    {toPascalCase(key)}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ flexGrow: 4 }}>
            <FormControl className={styles.explorer_item} variant={"outlined"}>
              <TextField
                value={searchTerm}
                className={styles.explorer_item}
                label={"Search"}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position={"start"}>
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
          </Box>
        </Stack>
      </Paper>
      {!isLoading && !isError && (
        <Grid flexGrow={1} spacing={0.5} container columns={{ xs: 1, md: 2 }}>
          <Grid item xs={1}>
            <Pane>
              <FilmList films={sortFilms(filterFilms(films))} />
            </Pane>
          </Grid>
          <Grid item xs={1}>
            <Pane>
              <FilmView />
            </Pane>
          </Grid>
        </Grid>
      )}
    </Paper>
  );
};
