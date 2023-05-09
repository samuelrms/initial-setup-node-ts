import * as express from "express";
import { Request, Response } from "express";
import * as dotenv from "dotenv";
import Start from "@/start";

const app = express();
dotenv.config();

const port = process.env.PORT || 3030;

app.get("/", (req: Request, res: Response) => {
  res.send(new Start().start());
});

app.listen(port, () => console.log(`Listening on port ${port}`));
