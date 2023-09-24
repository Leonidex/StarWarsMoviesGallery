import { Backdrop, Box, Typography } from "@mui/material";
import { Center } from "../basic/center";

interface Props {
  isError: boolean;
}

export const ErrorModal = (props: Props) => {
  return (
    <Backdrop
      open={props.isError}
      data-testid={"error-modal"}
      sx={{ zIndex: 999, backdropFilter: "blur(5px)" }}
    >
      <Box>
        <Center>
          <Typography color={"error"}>
            A network error has occurred, please refresh the page to try again.
          </Typography>
        </Center>
      </Box>
    </Backdrop>
  );
};
