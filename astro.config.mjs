// @ts-check
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://JuamBer.github.io",
  base: "/comparador-vehiculos-inversion",
  integrations: [tailwind()],
});
