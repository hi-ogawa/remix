import { createRequestHandler } from "@remix-run/express";

// @ts-ignore TODO: expose as "@remix-run/dev/server-build" like before?
import * as build from "virtual:server-entry";

export const handler = createRequestHandler({ build });
