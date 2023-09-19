import { defineConfig, sharpImageService } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import solid from "@astrojs/solid-js";

// import netlify from "@astrojs/netlify/functions";
// import netlify from "@astrojs/netlify/edge-functions"

export default defineConfig({
  site: "https://kathleenmcmahon-react-next.netlify.app",
  markdown: {
    syntaxHighlight: "prism",
    gfm: true,
  },
  integrations: [
    mdx({
      drafts: true,
    }),
    react({
      include: ["**/react/*"],
    }),
    solid({
      include: ["**/solid/*"],
    }),
  ],
  image: {
    service: sharpImageService(),
  },
  scopedStyleStrategy: "where",
  build: {
    inlineStylesheets: "never",
  },
  // output: "server",
  // adapter: netlify(),
});
