/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      animation: {
        typewriter: "typewriter 2s steps(11) forwards",
        caret:
          "typewriter 2s steps(11) forwards, blink 1s steps(11) infinite 2s",
      },
      keyframes: {
        typewriter: {
          to: {
            left: "100%",
          },
        },
        blink: {
          "0%": {
            opacity: "0",
          },
          "0.1%": {
            opacity: "1",
          },
          "50%": {
            opacity: "1",
          },
          "50.1%": {
            opacity: "0",
          },
          "100%": {
            opacity: "0",
          },
        },
      },
      colors: {
        darkgray: "#211F1F",
        warmgray: "#3c3c3c",
        glass: "#80c197",
        basecolor: "#111111",
      },
      // screens: {
      //   sm: "480px",
      //   md: "768px",
      //   lg: "976px",
      //   xl: "1440px",
      // },
    },
  },
  plugins: [],
};
