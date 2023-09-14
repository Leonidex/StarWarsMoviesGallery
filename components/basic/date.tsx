import { parseISO, format } from "date-fns";

interface Props {
  dateString: string;
}

export default function Date(props: Props) {
  const date = parseISO(props.dateString);
  return (
    <time dateTime={props.dateString}>{format(date, "LLLL d, yyyy")}</time>
  );
}
