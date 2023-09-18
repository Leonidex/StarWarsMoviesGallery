import { Backdrop, Typography } from "@mui/material";
import styles from "./loading.module.css";
import { useState } from "react";
import { Saber } from "./saber";

interface Props {
  isLoading: boolean;
}

export const LoadingScreen = (props: Props) => {
  const [showLogo, setShowLogo] = useState(true);

  return (
    <Backdrop open={props.isLoading} sx={{ zIndex: 999 }}>
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
        <Typography
          className={`${styles.star_wars_text} star_wars_hollow_font`}
          sx={{ userSelect: "none", fontSize: "2rem" }}
          color={"primary"}
        >
          <Saber />
        </Typography>
      )}
    </Backdrop>
  );
};
