/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns:{
        sidebar:"300px auto",
         //sidebar structure
         "sidebar-collapsed":"64px auto",
      }
    },
  },
  plugins: [],
};
