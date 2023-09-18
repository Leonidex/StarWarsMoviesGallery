import { Box, Stack } from "@mui/material";
import styles from "./loading.module.css";
import { useCallback, useState } from "react";

interface Props {}

enum Side {
  LIGHT = "LIGHT",
  DARK = "DARK",
}

export const Saber = (props: Props) => {
  const [side, setSide] = useState(Side.LIGHT);

  const handleLightSaberOnClick = useCallback(() => {
    if (side === Side.LIGHT) {
      setSide(Side.DARK);
    } else {
      setSide(Side.LIGHT);
    }
  }, [side]);

  return (
    <Stack
      className={`${styles.lightsaber} ${
        side === Side.DARK ? styles.sith : ""
      }`}
      onClick={handleLightSaberOnClick}
      direction={"column"}
    >
      <Box className={styles.blade}></Box>
      <Box className={styles.hilt}></Box>
    </Stack>
  );
};
