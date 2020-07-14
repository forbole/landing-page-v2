/* eslint-disable */
export { };
const express = require("express");
const next = require("next");
const nextI18NextMiddleware = require("next-i18next/middleware").default;

const nextI18next = require("../i18n");
const port = process.env.PORT || 3000;
const app = next({ dev: process.env.NODE_ENV !== "production" });
const handle = app.getRequestHandler();

(async () => {
  try {
    await app.prepare();
    const server = express();

    await nextI18next.initPromise;
    server.use(nextI18NextMiddleware(nextI18next));
    server.all("*", (req: Request, res: Response) => {
      return handle(req, res);
    });
    server.listen(port, (err?: any) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port} - env ${process.env.NODE_ENV ?? 'DEV'}`);
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
