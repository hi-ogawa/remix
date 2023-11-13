import express from "express";
import { handler } from "./handler";

const app = express();

app.use(
  "/build",
  express.static("public/build", { immutable: true, maxAge: "1y" })
);
app.use(express.static("public", { maxAge: "1h" }));

app.all("*", handler);

const port = 3000;
app.listen(port, () => console.log("http://localhost:" + port));
