module.exports = {
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
