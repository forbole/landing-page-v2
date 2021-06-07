/* eslint-disable */
import "dotenv-defaults/config";
import express, { Request, Response } from "express";
import next from "next";
import cors from "cors";
import nodemailer from "nodemailer";
import axios from 'axios';

const GhostAdminAPI = require('@tryghost/admin-api');
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

const ghostAdminApi = new GhostAdminAPI({
  url: 'https://admin.forbole.com',
  // Admin API key goes here
  key: process.env.GHOST_PRIVATE_KEY,
  version: 'v3'
});

(async () => {
  try {
    await app.prepare();
    const server = express();
    await nextI18next.initPromise;
    server.use(cors());
    server.use(nextI18NextMiddleware(nextI18next));
    server.use(express.json());

    // server.get('/author/:author', (req: Request, res: Response, next:any) => {
    //   try {
    //   const actualPage = `/author/${req.params.author}`
    //   const queryParams = Object.assign({}, req.params, req.query);
    //   app.render(req, res, actualPage, queryParams)
    //   } catch (e){
    //     next(e);
    //   }
    // });

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

    server.post("/api/post-preview", async (req: Request, res: Response, next:any) => {
      try {
        const {
          id,
        } = req?.body;
        const [blog] = await ghostAdminApi.posts.browse(
          {
            filter: `uuid:${id}`,
            limit: 1,
            include: "tags,authors",
            formats: "html",
          }
        ).catch((error) => {
          console.log('the error here');
          console.log(error.message);
        });
        res.status(200).json(blog ?? null);
      } catch (err) {
        next(err);
      }
    })

    server.all("*", (req: Request, res: Response) => {
      return handle(req, res);
    });

    // error handler
    server.use((err, req, res, next) => {
      res.status(err?.status || 500).json({
        message: err?.message || 'Internal server error.',
        stack: err?.stack,
        error: err,
      })
    })

    server.listen(port, (err?: any) => {
      if (err) throw err;
      console.log(`> Ready on ${url}`);
      console.log(`> ENV:  ${process.env.NODE_ENV}`);
      console.log(`> PORT:  ${process.env.PORT}`);
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
