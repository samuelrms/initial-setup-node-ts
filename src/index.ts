import * as express from "express";
import { Request, Response } from "express";
import Start from "@/start";

const app = express();

const port = process.env.PORT ?? 3030;

app.get("/", (req: Request, res: Response) => {
  res.send(new Start().start());
});

app.listen(port, () => console.log(`Listening on port ${port}`));
