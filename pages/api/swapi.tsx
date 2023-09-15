import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { resource, resourceId } = req.query;

  if (!resource) {
    throw new Error("Resource is undefined");
  }

  if (!process.env.API_ENDPOINT) {
    throw new Error("API endpoint is undefined");
  }

  const response = await axios.get(process.env.API_ENDPOINT);

  if (response?.data?.results) {
    res.status(200).json({ results: response?.data?.results });
  } else {
    res.status(500);
  }
}
