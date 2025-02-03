/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
   "./public/**/*.html"
  ],
  daisyui: {
    themes: false,
    darkTheme: "dark",
    base: true,
    utils: true,
    styled: true,
    prefix: "dui",
    logs: true,
    themeRoot: ":root",
  },
}