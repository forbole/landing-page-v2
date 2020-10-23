/* eslint-disable */
import "dotenv-defaults/config";
import express, { Request, Response } from "express";
import next from "next";
import cors from "cors";
import nodemailer from "nodemailer";

const nextI18NextMiddleware = require("next-i18next/middleware").default;
const nextI18next = require("../i18n");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT;
const url = process.env.URL;
const transporter = nodemailer.createTransport({
  host: "smtp.mailgun.org",
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL_GUN_USER,
    pass: process.env.MAIL_GUN_PW,
  },
});

(async () => {
  try {
    await app.prepare();
    const server = express();

    await nextI18next.initPromise;
    server.use(cors());
    server.use(nextI18NextMiddleware(nextI18next));
    server.use(express.json());

    server.post("/api/contact", (req: Request, res: Response) => {
      console.log(req.body);
      console.log("hiiiii");
      transporter.sendMail(req.body);
    });

    server.all("*", (req: Request, res: Response) => {
      return handle(req, res);
    });
    server.listen(port, (err?: any) => {
      if (err) throw err;
      console.log(`> Ready on ${url}:${port}`);
      console.log(`> ENV:  ${process.env.ENV}`);
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();

export default transporter;
