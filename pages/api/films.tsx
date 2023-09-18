import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  let response;
  if (process.env.API_ENDPOINT) {
    response = await axios.get(
      `${process.env.API_ENDPOINT}/films/?format=json`,
    );
  } else {
    throw new Error("Films API endpoint is undefined");
  }

  if (response?.data?.results) {
    res.status(200).json(response?.data);
  } else {
    res.status(500);
  }
}
