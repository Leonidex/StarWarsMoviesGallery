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
  const [isHovered, setIsHovered] = useState(false);

  const animatedDivProps = useSpring({
    reset: reset,
    from: { transform: "translateY(80vh)" },
    to: { transform: "translateY(-40vh)" },
    config: { duration: 30000 },
    pause: isHovered,
  });

  useEffect(() => {
    setReset(true);
    setTimeout(() => {
      setReset(false);
    }, 100);
  }, [props.text]);

  return (
    <Box className={styles.crawl_container}>
      <StarrySpace starCount={300}>
        <Box className={styles.crawl_content}>
          <animated.div style={animatedDivProps}>
            <Box>
              <Typography
                className={styles.crawl_text}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {props.text}
              </Typography>
            </Box>
          </animated.div>
        </Box>
      </StarrySpace>
    </Box>
  );
};
