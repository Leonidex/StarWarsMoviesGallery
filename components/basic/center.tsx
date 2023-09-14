import { ReactNode } from "react";
import { Box } from "@mui/material";

interface Props {
  children: ReactNode[] | ReactNode;
}
export const Center = (props: Props) => {
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {props.children}
    </Box>
  );
};
