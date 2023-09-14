import { Card, Grid, ListItem } from "@mui/material";
import { Movie } from "../../../types";
import { setSelectedMovieAtom } from "../../../store/actions";
import { useSetAtom } from "jotai";

interface Props {
  movie: Movie;
}

export const MovieListItem = (props: Props) => {
  const setSelectedMovie = useSetAtom(setSelectedMovieAtom);

  return (
    <ListItem onClick={() => setSelectedMovie(props.movie)}>
      <Grid container columns={8}>
        <Grid item xs={1}>
          <Card>{props.movie?.episode_id}</Card>
        </Grid>
        <Grid item xs={5}>
          <Card>{props.movie?.title}</Card>
        </Grid>
        <Grid item xs={2}>
          <Card>{props.movie?.release_date.toString()}</Card>
        </Grid>
      </Grid>
    </ListItem>
  );
};
