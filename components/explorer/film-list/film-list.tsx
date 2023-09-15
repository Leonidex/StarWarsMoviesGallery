import { List } from "@mui/material";
import { Film } from "../../../lib/types";
import { FilmListItem } from "./film-list-item";

interface Props {
  films: Film[];
}

export const FilmList = (props: Props) => {
  return (
    <List>
      {props.films.map((film) => (
        <FilmListItem film={film} />
      ))}
    </List>
  );
};
