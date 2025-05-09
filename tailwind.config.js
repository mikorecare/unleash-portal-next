module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx,html}'],
    theme: {
        extend: {
            fontFamily: {
                poppins: "var(--font-poppins)",
                montserrat: "var(--font-montserrat)",
            },
        },
    },
    plugins: [
        function ({ addVariant }) {
          addVariant('autofill', '&:-webkit-autofill');
        },
      ],
};
