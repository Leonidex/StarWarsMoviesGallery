import Layout from "../components/layout";
import { Box } from "@mui/material";
import { Explorer } from "../components/explorer";

export default function Home({}) {
  return (
    <Layout>
      <Box sx={{ height: "100%", width: "100%" }}>
        <Explorer />
      </Box>
    </Layout>
  );
}
