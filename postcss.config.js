// craco.config.js
import { purgecss } from '@fullhuman/postcss-purgecss';

module.exports = {
  style: {
    postcss: {
      plugins: [
        purgecss({
          content: ["./src/**/*.html", "./src/**/*.tsx", "./src/**/*.ts"],
        }),
        require("tailwindcss"),
        require("autoprefixer"),
      ],
    },
  },
};
