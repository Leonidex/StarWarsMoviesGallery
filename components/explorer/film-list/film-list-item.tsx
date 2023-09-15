import { Card, Grid, ListItem } from "@mui/material";
import { Film } from "../../../lib/types";
import { setSelectedFilmAtom } from "../../../lib/store/actions";
import { useSetAtom } from "jotai";

interface Props {
  film: Film;
}

export const FilmListItem = (props: Props) => {
  const setSelectedFilm = useSetAtom(setSelectedFilmAtom);

  return (
    <ListItem onClick={() => setSelectedFilm(props.film)}>
      <Grid container columns={8}>
        <Grid item xs={1}>
          <Card>{props.film?.episode_id}</Card>
        </Grid>
        <Grid item xs={5}>
          <Card>{props.film?.title}</Card>
        </Grid>
        <Grid item xs={2}>
          <Card>{props.film?.release_date.toString()}</Card>
        </Grid>
      </Grid>
    </ListItem>
  );
};
