/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        "meteor-effect": "meteor 5s linear infinite",
      },
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
      },
      colors: {
        'pink-accent': '#ff66cc',
        'blue-accent': '#66ccff',
        'yellow-accent': '#ffcc66',
        'purple-accent': '#aa66ff',
      },
      backgroundImage: {
        'about-gradient': 'linear-gradient(to bottom right, #2f004b, #000000, black)',
      },
      borderRadius: {
        'lg': '10px',
      },
      boxShadow: {
        'about-shadow': '0px 4px 20px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}

