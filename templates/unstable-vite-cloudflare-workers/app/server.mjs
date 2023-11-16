import { createRequestHandler } from "@remix-run/server-runtime";
import * as build from "../build/index.js";

const remixHandler = createRequestHandler(build, process.env.NODE_ENV);

export default {
  fetch(request, _env, _ctx) {
    return remixHandler(request);
  },
};
