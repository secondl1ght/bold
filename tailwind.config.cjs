module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,svelte}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        primary: "#EF951D",
        secondary: "#3ba5ac",
      },
    },
  },
  variants: {
    borderWidth: ["responsive", "hover", "focus"],
  },
};
