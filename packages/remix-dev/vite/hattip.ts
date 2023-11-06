import { type ServerBuild } from "@remix-run/node";
import { createRequestHandler } from "@remix-run/server-runtime";
import { type HattipHandler } from "@hattip/core";

export const createHattipHandler = (
  build: ServerBuild,
  {
    mode = "production",
    criticalCss,
  }: {
    mode?: string;
    criticalCss?: string;
  }
): HattipHandler => {
  let remixHandler = createRequestHandler(build, mode);
  return (ctx) => remixHandler(ctx.request, {}, { __criticalCss: criticalCss });
};
