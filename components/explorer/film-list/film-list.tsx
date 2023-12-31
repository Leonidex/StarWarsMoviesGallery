import { List } from "@mui/material";
import { Film } from "../../../lib/types";
import { FilmListItem } from "./film-list-item";

interface Props {
  films: Film[];
}

export const FilmList = (props: Props) => {
  return (
    <List data-testid={"film-list"}>
      {props.films.map((film) => (
        <FilmListItem key={`film-list-item[${film.episode_id}]`} film={film} />
      ))}
    </List>
  );
};
