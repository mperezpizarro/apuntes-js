import { defineConfig } from "astro/config"

// https://astro.build/config
import vue from "@astrojs/vue"
import tailwind from "@astrojs/tailwind"

// https://astro.build/config
export default defineConfig({
    integrations: [vue(), tailwind()],
    markdown: {
        syntaxHighlight: "shiki",
        shikiConfig: {
            theme: "dark-plus",
        },
    },
})
