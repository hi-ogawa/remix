import { createRequestHandler } from "@remix-run/express";
import express from "express";

// @ts-ignore TODO: expose as "@remix-run/dev/server-build" like before?
import * as build from "virtual:server-entry";

export const app = express();

// handle asset requests
if (import.meta.env.PROD) {
  app.use(
    "/build",
    express.static("public/build", { immutable: true, maxAge: "1y" })
  );
  app.use(express.static("public", { maxAge: "1h" }));
}

app.all("*", createRequestHandler({ build }));
