import Head from "next/head";
import styles from "./layout.module.css";
import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  children: ReactNode[] | ReactNode;
}

const siteTitle = "Star Wars Movies Gallery";

export default function Layout(props: Props) {
  return (
    <Box className={styles.appContainer}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Star Wars Movies Gallery" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <title>{siteTitle}</title>
      </Head>
      <Box className={styles.header}>
        <Typography>Star Wars Movies Gallery</Typography>
      </Box>
      <Box className={styles.contentContainer}>{props.children}</Box>
    </Box>
  );
}
