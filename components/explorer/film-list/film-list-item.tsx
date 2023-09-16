import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Film } from "../../../lib/types";
import { setSelectedFilmAtom } from "../../../lib/store/actions";
import { useSetAtom } from "jotai";
import { numberToRomanNumeral } from "../../../lib/utils/number";

interface Props {
  film: Film;
}

export const FilmListItem = (props: Props) => {
  const setSelectedFilm = useSetAtom(setSelectedFilmAtom);

  return (
    <ListItem disablePadding>
      <ListItemButton onClick={() => setSelectedFilm(props.film)}>
        <ListItemAvatar>
          <Avatar variant={"rounded"} alt={props.film.episode_id.toString()}>
            {numberToRomanNumeral(props.film.episode_id)}
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={props.film?.title}
          secondary={`Released on: ${props.film?.release_date.toString()}`}
        />
      </ListItemButton>
    </ListItem>
  );
};
