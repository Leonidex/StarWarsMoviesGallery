import { List } from "@mui/material";
import { Movie } from "../../../types";
import { MovieListItem } from "./movie-list-item";

interface Props {
  movies: Movie[];
}

export const MovieList = (props: Props) => {
  return (
    <List>
      {props.movies.map((movie) => (
        <MovieListItem movie={movie} />
      ))}
    </List>
  );
};
