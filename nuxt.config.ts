import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content"],
  css: ["@/assets/css/main.css", "remixicon/fonts/remixicon.css"],
  baseURL: ""
});
