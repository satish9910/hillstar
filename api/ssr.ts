import type { IncomingMessage, ServerResponse } from "node:http";
import { NodeRequest, sendNodeResponse } from "srvx/node";
import serverBuild from "../dist/server/index.js";

export default async function handler(req: IncomingMessage, res: ServerResponse) {
  const webReq = new NodeRequest({ req, res });
  const webRes = await serverBuild.fetch(webReq);

  if (webRes.headers.get("content-type")?.startsWith("text/html")) {
    res.setHeader("content-encoding", "identity");
  }

  res.setHeaders(webRes.headers);
  res.writeHead(webRes.status, webRes.statusText);
  return sendNodeResponse(res, webRes);
}
