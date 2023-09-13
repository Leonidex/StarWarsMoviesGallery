import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  let response;
  if (process.env.DATA_API) {
    response = await axios.get(process.env.DATA_API);
  } else {
    throw new Error("Data API endpoint is undefined");
  }

  if (response?.data?.results) {
    res.status(200).json({ results: response?.data?.results });
  } else {
    res.status(500);
  }
}
