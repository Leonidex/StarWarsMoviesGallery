import { Backdrop, CircularProgress, Typography } from "@mui/material";
import styles from "./explorer.module.css";
import { useState } from "react";

interface Props {
  isLoading: boolean;
}

export const LoadingScreen = (props: Props) => {
  const [showLogo, setShowLogo] = useState(true);

  return (
    <Backdrop open={props.isLoading} sx={{ zIndex: 999 }}>
      {showLogo ? (
        <Typography
          className={`${styles.star_wars_text} star_wars_hollow_font`}
          sx={{ userSelect: "none", fontSize: "5rem" }}
          color={"primary"}
          onAnimationEnd={() => setShowLogo(false)}
        >
          Star Wars
        </Typography>
      ) : (
        <CircularProgress />
      )}
    </Backdrop>
  );
};
