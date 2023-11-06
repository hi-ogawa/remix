import { createMiddleware } from "@hattip/adapter-node";

import { createHattipHandler } from "./hattip";

export const createHattipNodeHandler = (
  ...args: Parameters<typeof createHattipHandler>
) => createMiddleware(createHattipHandler(...args));
