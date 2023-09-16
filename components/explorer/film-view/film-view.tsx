import { Center } from "../../basic/center";
import { Stack, Typography } from "@mui/material";
import { useAtomValue } from "jotai";
import { selectedFilmAtom } from "../../../lib/store/atoms";

interface Props {}

export const FilmView = (props: Props) => {
  const film = useAtomValue(selectedFilmAtom);

  return film ? (
    <Stack direction={"column"} padding={2}>
      <Typography variant={"h4"}>{film.title}</Typography>
      <Typography variant={"subtitle1"}>{film.opening_crawl}</Typography>
      <Typography variant={"subtitle1"}>
        Directed by: {film.director}
      </Typography>
      <Typography variant={"subtitle1"}>
        Produced by: {film.producer}
      </Typography>
      <Typography variant={"subtitle1"}>
        Released at: {film.release_date.toString()}
      </Typography>
      {/*<ItemsAccordion itemUrls={film.characters} title={"Characters"} />*/}
    </Stack>
  ) : (
    <Center>No film selected</Center>
  );
};
