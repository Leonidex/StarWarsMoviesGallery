import { Box, Stack } from "@mui/material";
import styles from "./loading.module.css";
import { loadingSideAtom, Side } from "../../../lib/store/atoms";
import { useAtomValue } from "jotai";

interface Props {}

export const Saber = (props: Props) => {
  const side = useAtomValue(loadingSideAtom);

  return (
    <Stack
      className={`${styles.lightsaber} ${
        side === Side.DARK ? styles.sith : ""
      }`}
      direction={"column"}
    >
      <Box className={styles.blade}></Box>
      <Box className={styles.hilt}></Box>
    </Stack>
  );
};
