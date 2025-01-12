/** @type {import('tailwindcss').Config} */
import withMIT from "@material-tailwind/react/utils/withMT";

export default withMIT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        gilroy: ['Gilroy', '-apple-system', 'BlinkMacSystemFont', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'Arial', 'sans-serif'],
        poppins : ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
})

