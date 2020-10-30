/* eslint-disable */
import "dotenv-defaults/config";
import express, { Request, Response } from "express";
import next from "next";
import cors from "cors";
import nodemailer from "nodemailer";
import axios from 'axios';

const nextI18NextMiddleware = require("next-i18next/middleware").default;
const nextI18next = require("../i18n");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT;
const url = process.env.NEXT_PUBLIC_URL;
const transporter = nodemailer.createTransport({
  service: "Mailgun",
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

    server.post("/api/contact", async (req: Request, res: Response, next:any) => {
      try {
        if (process.env.NODE_ENV === 'production') {
          await transporter.sendMail(req.body);
        }
        res.status(200).json({
          success: true,
        });
      } catch (e) {
        next(e);
      }
    });

    server.post("/api/proxy", async (req:Request, res:Response, next:any) => {
      try{
        const url = req?.body?.url;
        if (url) {
          const { data } = await axios.get(req?.body?.url);
          res.status(200).json(data)
        }
        next();
      } catch (err) {
        next(err);
      }
    })

    server.all("*", (req: Request, res: Response) => {
      return handle(req, res);
    });

    // error handler
    server.use((err, req, res, next) => {
      console.error(err)
      console.error(err?.stack)
      res.status(err?.status || 500).send(err?.message || 'Internal server error.')
    })

    server.listen(port, (err?: any) => {
      if (err) throw err;
      console.log(`> Ready on ${url}`);
      console.log(`> ENV:  ${process.env.ENV}`);
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
