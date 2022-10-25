/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        theme: {},
        extend: {
            fontFamily: {
                roboto: ["roboto", "sans-serif"],
                recole: ["Recole", "sans-serif"],
            },
            backgroundColor: {
                primary: "#455D58",
                secondary: "#FAF7F2",
                hover:'#ffb7ae'
            },
            backgroundImage: {
                hero: "url('./assets/images/home-hero.jpg')",
            },
            textColor: {
                primary: "#455D58",
                hover:'#ffb7ae'
            },
            borderColor: {
                primary: "#455D58",
                hover:'#ffb7ae'
            },
        },
    },
    plugins: [],
}
