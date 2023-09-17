import { Box } from "@mui/material";
import styles from "./starry-space.module.css";
import { useEffect, useState } from "react";

interface Props {}

export const Star = (props: Props) => {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const x = Math.floor(Math.random() * 100);
    const y = Math.floor(Math.random() * 100);
    setCoordinates({
      x,
      y,
    });
  }, []);

  return (
    <Box
      className={styles.star}
      sx={{ top: `${coordinates.x}%`, left: `${coordinates.y}%` }}
    />
  );
};
