/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: {
        marineBlue: "#02295a",
        purplishBlue: "#473dff",
        pastelBlue: "#adbeff",
        lightBlue: "#bfe2fd",
        strawberryRed: "#ed3548"
      },
      neutral: {
        coolGray: "#9699ab",
        lightGray: "#d6d9e6",
        mangolia: "#f0f6ff",
        alabaster: "#fafbff"
      },
      white: "#ffffff",
      black: "#000000"
    },
    screens: {
      "xl": "1440px"
    },
    extend: {
      backgroundImage: {
        'background-mobile': "url('/bg-sidebar-mobile.svg')",
        'background-desktop': "url('/bg-sidebar-desktop.svg')"
      }
    },
  },
  plugins: [],
}

