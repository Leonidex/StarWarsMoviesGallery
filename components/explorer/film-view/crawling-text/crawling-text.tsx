import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import styles from "./crawling-text.module.css";
import { animated, useSpring } from "react-spring";
import { StarrySpace } from "../starry-space/starry-space";

interface Props {
  text: string;
}

export const CrawlingText = (props: Props) => {
  const [reset, setReset] = useState(false);

  const animatedDivProps = useSpring({
    reset: reset,
    from: { transform: "translateY(80vh)" },
    to: { transform: "translateY(-40vh)" },
    config: { duration: 30000 },
  });

  useEffect(() => {
    setReset(!reset);
  }, [props.text]);

  return (
    <Box className={styles.crawl_container}>
      <StarrySpace starCount={100}>
        <Box className={styles.crawl_content}>
          <animated.div style={animatedDivProps}>
            <Box
              style={{ fontSize: "4em", fontWeight: "bold", color: "#FFE81F" }}
            >
              <Typography className={styles.crawl_text}>
                {props.text}
              </Typography>
            </Box>
          </animated.div>
        </Box>
      </StarrySpace>
    </Box>
  );
};
