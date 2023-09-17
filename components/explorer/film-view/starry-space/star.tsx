import { Box } from "@mui/material";
import styles from "./starry-space.module.css";
import { useEffect, useState } from "react";

interface Props {}

export const Star = (props: Props) => {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [animationDuration, setAnimationDuration] = useState(5);
  const [animationDelay, setAnimationDelay] = useState(0);

  useEffect(() => {
    const x = Math.floor(Math.random() * 100);
    const y = Math.floor(Math.random() * 100);
    setCoordinates({
      x,
      y,
    });

    const duration = 5 + Math.floor(Math.random() * 10);
    const delay = Math.floor(Math.random() * 2);

    setAnimationDuration(duration);
    setAnimationDelay(delay);
  }, []);

  return (
    <Box
      className={`${styles.star} ${styles.dim_animation}`}
      sx={{
        top: `${coordinates.x}%`,
        left: `${coordinates.y}%`,
      }}
      style={{
        animationDuration: `${animationDuration}s`,
        animationDelay: `${animationDelay}s`,
      }}
    />
  );
};
