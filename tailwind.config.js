/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "multi-color":
          "0 10px 15px -3px rgba(255, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 255, 0, 0.5), 0 10px 15px -3px rgba(0, 0, 255, 0.5)",
        "2xl-multi-color":
          "0 20px 25px -5px rgba(255, 0, 0, 0.7), 0 10px 10px -5px rgba(0, 255, 0, 0.7), 0 20px 25px -5px rgba(0, 0, 255, 0.7)",
      },
    },
  },
  plugins: [],
};
