import Head from "next/head";
import styles from "./layout.module.css";
import { Box, Container, Typography } from "@mui/material";
import { ReactNode } from "react";
export const siteTitle = "Star Wars Movies Gallery";
interface Props {
  children: ReactNode[];
}

export default function Layout(props: Props) {
  return (
    <Container className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Star Wars Movies Gallery" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Box className={styles.header}>
        <Typography>Star Wars Movies Gallery</Typography>
      </Box>
      <Container>{props.children}</Container>
    </Container>
  );
}
