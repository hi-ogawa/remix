import { ServerBuild } from "@remix-run/server-runtime";
import { AsyncLocalStorage } from "node:async_hooks"

export interface DevRequestContext {
  build: ServerBuild;
  criticalCss: string | undefined;
}

export const devRequestContextStorage = new AsyncLocalStorage<DevRequestContext>();
