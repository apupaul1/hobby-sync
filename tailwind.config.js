/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  // Add this section
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"], // Load default light styles
          "primary": "#2563EB",          // Royal Blue
          "base-100": "#FFFFFF",         // White (Background)
          "base-200": "#F1F5F9",         // Slate 100 (Secondary BG)
          "base-content": "#0F172A",     // Slate 900 (Text)
          "neutral": "#0F172A",          // Dark Slate (for neutral elements)
        },
        dark: {
          ...require("daisyui/src/theming/themes")["dark"], // Load default dark styles
          "primary": "#3B82F6",          // Bright Blue
          "base-100": "#0F172A",         // Slate 900 (Background)
          "base-200": "#1E293B",         // Slate 800 (Secondary BG)
          "base-content": "#F8FAFC",     // Slate 50 (Text)
          "neutral": "#1E293B",          // Slate 800
        },
      },
    ],
  },
}