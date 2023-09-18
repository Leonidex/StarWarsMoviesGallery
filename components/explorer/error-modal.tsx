import { Box, Modal, Typography } from "@mui/material";
import { Center } from "../basic/center";

interface Props {
  isError: boolean;
}

export const ErrorModal = (props: Props) => {
  return (
    <Modal open={props.isError}>
      <Box>
        <Center>
          <Typography color={"error"}>
            A network error has occurred, please refresh the page to try again.
          </Typography>
        </Center>
      </Box>
    </Modal>
  );
};
