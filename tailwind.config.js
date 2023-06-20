/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        VeryLightGreen: "rgb(219, 226, 221)",
        LightGreen: "rgb(199, 206, 201)",
        Green: "rgb(92, 103, 86)",
        MediumGreenishGray: "rgb(72, 83, 66)",
        DarkGreenishGray: "rgb(47, 58, 41)",
        BGButtonHover: "rgb(174, 181, 176)",
      },
      fontFamily: {
        JacquesFrancois: ["Jacques Francois", "serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        xxs: "320px",
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
