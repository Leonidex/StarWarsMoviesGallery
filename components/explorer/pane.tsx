import { Paper } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode[] | ReactNode;
}

export const Pane = (props: Props) => {
  return (
    <Paper elevation={3} sx={{ height: "100%", width: "100%" }}>
      {props.children}
    </Paper>
  );
};
