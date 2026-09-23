module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "surface-bright": "#fbf9f4",
        "primary": "#1b1c19",
        "primary-container": "#2a2723",
        "surface-variant": "#e5e2dc",
        "outline": "#7a776f",
        "outline-variant": "#d5d0c7",
        "secondary": "#a13f1c",
        "secondary-container": "#f2794e",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f5f3ee",
        "surface-container": "#eeece7",
        "surface-container-high": "#e7e4de",
        "surface-container-highest": "#dedad2",
        "background": "#fbf9f4",
        "dark-slate": "#121312",
        "dark-card": "#1c1d1a",
        "on-surface": "#1b1c19",
        "on-surface-variant": "#5f5d57",
        "on-surface-muted": "#827f77"
      },
      fontFamily: {
        "serif-display": ["Bodoni Moda", "serif"],
        "sans-body": ["Outfit", "sans-serif"]
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}
