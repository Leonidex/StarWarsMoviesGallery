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
      sx={{ zIndex: 999, cursor: "pointer", backdropFilter: "blur(5px)" }}
      onClick={() => changeSide()}
    >
      {showLogo ? (
        <Typography
          className={`${styles.star_wars_text} ${styles.star_wars_intro} star_wars_hollow_font`}
          sx={{ fontSize: "5rem", textAlign: "center" }}
          color={"primary"}
          onAnimationEnd={() => setShowLogo(false)}
        >
          Star Wars
        </Typography>
      ) : (
        <Center>
          <Typography
            className={styles.loading_text}
            sx={{ fontSize: "3rem" }}
            color={"secondary"}
          >
            Loading
          </Typography>
          <Typography
            className={styles.loading_first_dot}
            sx={{ fontSize: "3rem" }}
            color={"secondary"}
          >
            .
          </Typography>
          <Typography
            className={styles.loading_second_dot}
            sx={{ fontSize: "3rem" }}
            color={"secondary"}
          >
            .
          </Typography>
          <Typography
            className={styles.loading_third_dot}
            sx={{ fontSize: "3rem" }}
            color={"secondary"}
          >
            .
          </Typography>
          <Saber />
        </Center>
      )}
    </Backdrop>
  );
};
