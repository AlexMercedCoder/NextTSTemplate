import { NextApiRequest as Request, NextApiResponse as Response } from "next";

// INTERFACE FOR RESPONSE DATA
type resData = {};

//ROUTE HANDLER
export default (req: Request, res: Response<resData>) => {
  res.status(200).json({ name: "John Doe" });
};
