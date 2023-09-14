import { Center } from "../../basic/center";
import { Stack } from "@mui/material";
import { useAtomValue } from "jotai";
import { selectedMovieAtom } from "../../../store/atoms";

interface Props {}

export const MovieView = (props: Props) => {
  const movie = useAtomValue(selectedMovieAtom);

  return movie ? (
    <Stack direction={"column"}></Stack>
  ) : (
    <Center>No movie selected</Center>
  );
};
