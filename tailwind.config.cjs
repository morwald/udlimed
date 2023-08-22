const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: colors.sky["30"],
          dark: colors.slate["200"],
        },
        secondary: {
          DEFAULT: colors.slate["800"],
          light: colors.slate["600"],
        },
        tertiary: {
          DEFAULT: colors.amber["700"],
        }
      },
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  darkMode: "class",
};
