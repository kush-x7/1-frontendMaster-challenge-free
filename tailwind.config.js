module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        karla: ['Karla', 'sans-serif'],
      },

      colors: {
        primary: {
          Cyan: 'hsl(179, 62%, 43%)',
          Yellow: 'hsl(71, 73%, 54%)',
        },

        neutral: {
          LightGray: 'hsl(204, 43%, 93%)',
          GrayishBlue: 'hsl(218, 22%, 67%)',
        },
      },
    },
  },

  plugins: [],
};
