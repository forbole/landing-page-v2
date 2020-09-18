import GhostContentAPI from "@tryghost/content-api";

// Create API instance with site credentials
export const ghostApi = new GhostContentAPI({
  url: "https://demo.ghost.io",
  key: "22444f78447824223cefc48062",
  version: "v3",
});
