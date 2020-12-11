import { NextApiHandler } from "next";
import { data } from "./data";

const handler: NextApiHandler = async (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(data));
};

export default handler;
