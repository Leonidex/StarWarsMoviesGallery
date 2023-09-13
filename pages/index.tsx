import Layout from "../components/layout";
import { Box } from "@mui/material";
import { Explorer } from "../components/explorer/explorer";
import { fetchMoviesAtom } from "../store/actions";
import { useAtom } from "jotai";
import { useEffect } from "react";

export default function Home({}) {
  const [, fetchMovies] = useAtom(fetchMoviesAtom);

  useEffect(() => {
    fetchMovies().catch(console.error);
  }, []);

  return (
    <Layout>
      <Box sx={{ height: "100%", width: "100%" }}>
        <Explorer />
      </Box>
    </Layout>
  );
}
