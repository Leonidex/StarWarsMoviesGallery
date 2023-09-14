import { Center } from "../../basic/center";
import { Stack, Typography } from "@mui/material";
import { useAtomValue } from "jotai";
import { selectedMovieAtom } from "../../../store/atoms";

interface Props {}

export const MovieView = (props: Props) => {
  const movie = useAtomValue(selectedMovieAtom);

  return movie ? (
    <Stack direction={"column"}>
      <Typography variant={"h4"}>{movie.title}</Typography>
      <Typography variant={"subtitle1"}>{movie.opening_crawl}</Typography>
      <Typography variant={"subtitle1"}>
        Directed by: {movie.director}
      </Typography>
      <Typography variant={"subtitle1"}>
        Produced by: {movie.producer}
      </Typography>
      <Typography variant={"subtitle1"}>
        Released at: {movie.release_date.toString()}
      </Typography>
      {/*<ItemsAccordion itemUrls={movie.characters} title={"Characters"} />*/}
    </Stack>
  ) : (
    <Center>No movie selected</Center>
  );
};
