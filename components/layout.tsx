import Head from "next/head";
import styles from "./layout.module.css";
import { Stack, Typography } from "@mui/material";
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
      <Stack className={styles.header}>
        <Typography>{siteTitle}</Typography>
      </Stack>
      <Stack className={styles.contentContainer}>{props.children}</Stack>
    </Stack>
  );
}
