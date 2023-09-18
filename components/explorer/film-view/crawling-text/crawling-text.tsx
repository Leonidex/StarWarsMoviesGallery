import { ReactElement, useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import styles from "./crawling-text.module.css";
import { animated, useSpring } from "react-spring";
import { StarrySpace } from "../starry-space/starry-space";

interface Props {
  title: string;
  subtitle: string;
  text: string;
}

export const CrawlingText = (props: Props) => {
  const [reset, setReset] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const [crawlContent, setCrawlContent] = useState<ReactElement>();

  const animatedDivProps = useSpring({
    reset: reset,
    from: { transform: "translateY(0vh)" },
    to: { transform: "translateY(-200vh)" },
    config: { duration: 120000 },
    pause: isHovered,
  });

  useEffect(() => {
    setReset(true);
    setTimeout(() => {
      setReset(false);
    }, 100);

    setCrawlContent(
      <Stack
        direction={"column"}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        width={{ sx: "100%", md: "75%", lg: "60%" }}
      >
        <Typography className={styles.crawl_text}>{props.title}</Typography>
        <Typography fontWeight={"bold"} className={styles.crawl_text}>
          {props.subtitle}
        </Typography>
        <Typography className={styles.crawl_text}>{props.text}</Typography>
      </Stack>,
    );
  }, [props.title, props.subtitle, props.text]);

  return (
    <StarrySpace starCount={300}>
      <Box className={styles.crawl_container}>
        <Box className={styles.crawl_content}>
          <animated.div style={animatedDivProps}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              {crawlContent}
            </Box>
          </animated.div>
        </Box>
      </Box>
    </StarrySpace>
  );
};
