import { defineNuxtConfig } from "nuxt";
import posts from "./content/contentrain/posts/posts.json";

const generateRoutes = () => {
  return (posts as Array<any>).map((p) => {
    return { url: `/posts/${p.slug}`, lastmod: new Date(1671475385857) };
  });
};

export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content", "@nuxtjs/sitemap"],
  css: ["@/assets/css/main.css", "remixicon/fonts/remixicon.css"],
  sitemap: {
    gzip: true,
    hostname: "https://1ek.in",
  },
  generate: {
    routes: generateRoutes(),
  },
});
