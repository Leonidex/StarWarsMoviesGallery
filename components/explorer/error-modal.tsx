import { Modal, Typography } from "@mui/material";
import { Center } from "../basic/center";

interface Props {
  isError: boolean;
}

export const ErrorModal = (props: Props) => {
  return (
    <Modal open={props.isError}>
      <Center>
        <Typography color={"error"}>
          A network error has occurred, please refresh the page to try again.
        </Typography>
      </Center>
    </Modal>
  );
};
