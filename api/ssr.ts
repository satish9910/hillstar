import serverBuild from "../dist/server/index.js";

export default async function handler(request: Request) {
  return serverBuild.fetch(request);
}
