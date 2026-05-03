import serverBuild from "../dist/server/index.js";

export default async function handler(request: Request) {
  const forwardedProto = request.headers.get("x-forwarded-proto") ?? "https";
  const forwardedHost = request.headers.get("x-forwarded-host") ?? request.headers.get("host");
  const absoluteUrl = new URL(request.url, `${forwardedProto}://${forwardedHost ?? "localhost"}`);
  const normalizedRequest = new Request(absoluteUrl, request);

  return serverBuild.fetch(normalizedRequest);
}
