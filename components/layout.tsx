import Head from "next/head";
import styles from "./layout.module.css";
import { Box, Stack, Typography } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  children: ReactNode[] | ReactNode;
}

const siteTitle = "Star Wars Films Gallery";

export default function Layout(props: Props) {
  return (
    <Stack direction={"column"} className={styles.appContainer}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Star Wars Films Gallery" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <title>{siteTitle}</title>
      </Head>
      <Box className={styles.header}>
        <Typography>Star Wars Films Gallery</Typography>
      </Box>
      <Box className={styles.contentContainer}>{props.children}</Box>
    </Stack>
  );
}
