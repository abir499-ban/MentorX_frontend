/** @type {import('tailwindcss').Config} */
import withMIT from "@material-tailwind/react/utils/withMT";

export default withMIT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
})

