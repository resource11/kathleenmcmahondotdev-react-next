import { defineConfig, sharpImageService } from "astro/config";
import react from "@astrojs/react";
import solid from "@astrojs/solid-js";
import mdx from "@astrojs/mdx";

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
    react(),
    solid(),
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
