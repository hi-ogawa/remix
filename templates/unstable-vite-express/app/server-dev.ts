import express from "express";
import { handler } from "./handler";
import { unstable_createViteServer } from "@remix-run/dev";

const app = express();

const vite = await unstable_createViteServer();
app.use(vite.middlewares);

app.all("*", handler);

const port = 3000;
app.listen(port, () => console.log("http://localhost:" + port));
