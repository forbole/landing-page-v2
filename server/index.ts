/* eslint-disable */
import 'dotenv-defaults/config';
import express, { Request, Response } from "express";
import next from "next";
import cors from "cors";

const nextI18NextMiddleware = require("next-i18next/middleware").default;
const nextI18next = require("../i18n");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT;
const url = process.env.NEXT_PUBLIC_URL;

(async () => {
  try {
    await app.prepare();
    const server = express();

    await nextI18next.initPromise;
    server.use(cors());
    server.use(nextI18NextMiddleware(nextI18next));

    server.all("*", (req: Request, res: Response) => {
      return handle(req, res);
    });
    server.listen(port, (err?: any) => {
      if (err) throw err;
      console.log(`> Ready on ${url}`);
      console.log(`> ENV:  ${process.env.ENV}`)
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
