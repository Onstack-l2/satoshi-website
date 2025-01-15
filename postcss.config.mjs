/** @type {import('postcss-load-config').Config} */
const config = {
  theme: {
    extend: {
      colors: {
        primary: "#855D38",
        secondary: "#F29727",
        accent: "#F27F1B",
        dark: "#0C2031",
        light: "#F2AE2E",
      },
      animation: {
        slide: "slide 10s linear infinite",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: {
    tailwindcss: {},
  },
};

export default config;
