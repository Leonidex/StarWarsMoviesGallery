import { Backdrop, Typography } from "@mui/material";
import styles from "./loading.module.css";
import { useState } from "react";
import { Saber } from "./saber";
import { Center } from "../../basic/center";
import { useSetAtom } from "jotai";
import { changeLoadingSideAtom } from "../../../lib/store/actions";

interface Props {
  isLoading: boolean;
}

export const LoadingScreen = (props: Props) => {
  const [showLogo, setShowLogo] = useState(true);

  const changeSide = useSetAtom(changeLoadingSideAtom);

  return (
    <Backdrop
      open={props.isLoading}
      sx={{ zIndex: 999 }}
      onClick={() => changeSide()}
    >
      {showLogo ? (
        <Typography
          className={`${styles.star_wars_text} ${styles.star_wars_intro} star_wars_hollow_font`}
          sx={{ userSelect: "none", fontSize: "5rem" }}
          color={"primary"}
          onAnimationEnd={() => setShowLogo(false)}
        >
          Star Wars
        </Typography>
      ) : (
        <Center>
          <Saber />
        </Center>
      )}
    </Backdrop>
  );
};
