import { Card, Grid, ListItem } from "@mui/material";
import { Movie } from "../../../types";

interface Props {
  movie: Movie;
}

export const MovieListItem = (props: Props) => {
  return (
    <ListItem>
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
