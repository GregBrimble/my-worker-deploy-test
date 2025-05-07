import { WorkerEntrypoint } from "cloudflare:workers";

export default class extends WorkerEntrypoint {
  fetch() {
    return new Response("Hello, world!");
  }
}
