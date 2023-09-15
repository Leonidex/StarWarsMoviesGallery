import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  CircularProgress,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import axios from "axios";
import { Center } from "../../basic/center";

interface Props {
  itemUrls: string[];
  title: string;
}

export const ItemsAccordion = (props: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [itemsData, setItemsData] = useState([]);

  const fetchItemData = useCallback(
    async (urls: string[], setter: Dispatch<SetStateAction<never[]>>) => {
      const response = await axios.get("/api/item-data", {
        data: urls,
      });
      console.log("response:", response);
      setter(response.data);
    },
    [props.itemUrls],
  );

  useEffect(() => {
    if (isExpanded) {
      setIsLoading(true);
      fetchItemData(props.itemUrls, setItemsData)
        .then(() => setIsLoading(false))
        .catch((err) => {
          console.error(err);
          setIsLoading(false);
        });
    }
  }, [isExpanded]);

  return (
    <Accordion onChange={(event, isExpanded) => setIsExpanded(isExpanded)}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${props.title}-accordion-content`}
        id={`${props.title}-accordion-header`}
      >
        <Typography>{props.title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {isLoading ? (
          <Center>
            <CircularProgress />
          </Center>
        ) : (
          itemsData.map((itemData) => <Typography>{itemData}</Typography>)
        )}
      </AccordionDetails>
    </Accordion>
  );
};
