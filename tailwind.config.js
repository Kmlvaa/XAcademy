/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        logoBlue: "#112ec1",
        Blue: "#31489f",
        cubBlue: "#a6bce1",
        cubBlue2: "#a6bce2",
        white: "rgb(255 255 255)",
        skyBlue: "rgb(96 165 250)",
        gray500: "rgb(107 114 128)",
        gray700: "rgb(55 65 81)",
        gray200: "rgb(229 231 235)",
        red600: "rgb(220 38 38)",
        yellow600: "rgb(202 138 4)",
        blue600: "rgb(37 99 235)",
        blue950: "rgb(23 37 84)",
        black: "rgb(0 0 0)",
        CustomGray: "#7f96a8",
        TeacherBG: "#dae1e7",
        ContactGray: "#e8ebed",
      },
      width: {
        px100: "100px",
        px150: "150px",
        px200: "200px",
        px750: "750px",
        px250: "250px",
        px300: "300px",
        px350: "350px",
        px400: "400px",
        px450: "450px",
        px500: "500px",
        px600: "600px",
        px700: "700px",
        px800: "800px",
        px900: "900px",
        px950: "950px",
        px1000: "1000px",
      },
      height: {
        px100: "100px",
        px200: "200px",
        px270: "270px",
        px250: "250px",
        px300: "300px",
        px350: "350px",
        px400: "400px",
        px450: "450px",
        px500: "500px",
        px600: "600px",
        px700: "700px",
        px800: "800px",
        px900: "900px",
        px1000: "1000px",
      },
      boxShadow: {
        shadowCustom1: "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
        custom2: "-1px 1px 21px -1px rgba(0,0,0,0.3)"
      },
      backgroundImage: {
        custom1: "linear-gradient(90deg, rgba(2,0,.6,1) -10%, rgba(9,9,121,1) 40%, rgba(0,212,255,1) 120%)",
      },
      maxWidth: {
        px1200: "1200px"

      }
    },
  },
  plugins: [],
}
