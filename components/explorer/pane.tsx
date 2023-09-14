import { Card } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode[] | ReactNode;
}

export const Pane = (props: Props) => {
  return (
    <Card square sx={{ height: "100%", width: "100%" }}>
      {props.children}
    </Card>
  );
};
