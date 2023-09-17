import { Center } from "../../basic/center";
import { Stack, Typography } from "@mui/material";
import { useAtomValue } from "jotai";
import { selectedFilmAtom } from "../../../lib/store/atoms";
import { CrawlingText } from "./crawling-text/crawling-text";

interface Props {}

export const FilmView = (props: Props) => {
  const film = useAtomValue(selectedFilmAtom);

  return film ? (
    <Stack
      direction={"column"}
      padding={2}
      alignContent={"space-around"}
      height={"100%"}
    >
      <Typography variant={"h4"}>{film.title}</Typography>
      <CrawlingText text={film.opening_crawl} />
      <Stack direction={"column"}>
        <Typography variant={"subtitle1"}>
          Directed by: {film.director}
        </Typography>
        <Typography variant={"subtitle1"}>
          Produced by: {film.producer}
        </Typography>
        <Typography variant={"subtitle1"}>
          Released at: {film.release_date.toString()}
        </Typography>
      </Stack>
      {/*<ItemsAccordion itemUrls={film.characters} title={"Characters"} />*/}
    </Stack>
  ) : (
    <Center>No film selected</Center>
  );
};
