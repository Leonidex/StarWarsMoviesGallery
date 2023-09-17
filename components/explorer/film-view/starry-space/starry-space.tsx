import { Star } from "./star";
import { ReactNode } from "react";
import { Box } from "@mui/material";

interface Props {
  starCount: number;
  children?: ReactNode[] | ReactNode;
}

export const StarrySpace = (props: Props) => {
  return (
    <Box sx={{ height: "100%", width: "100%", position: "relative" }}>
      {Array.from(Array(props.starCount), (_, index) => (
        <Star key={`starry-space-stars[${index}]`} />
      ))}
      {props.children}
    </Box>
  );
};
