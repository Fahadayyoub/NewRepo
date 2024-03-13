module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 50: "#fafafb", 100: "#f3f4f6", 300: "#dee1e6", 500: "#9095a0", 900: "#171a1f" },
        white: { A700: "#ffffff" },
        indigo: { 300: "#796fc3" },
        blue_gray: { 200: "#bcc1ca", 500: "#6e7787", 800: "#424955" },
        teal: { 900: "#002a4a", "900_01": "#00294a", "900_03": "#002b4b" },
      },
      boxShadow: { xs: "0px 4px  9px 0px #171a1f30", sm: "0px 3px  6px 0px #120f281e" },
      fontFamily: { inter: "Inter", montserrat: "Montserrat" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
