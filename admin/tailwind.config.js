/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
	content: ["./src/**/*.{html,js,jsx}"],
	mode: "jit",
	theme: {
		fontFamily: {
			Roboto: ["Roboto", "sans-serif"],
			Poppins: ["Poppins", "sans-serif"],
		},
		extend: {
			screens: {
				"1000px": "1050px",
				"1100px": "1110px",
				"800px": "800px",
				"1300px": "1300px",
				"400px": "400px",
			},
			backgroundImage: {
				"login-pattern":
					"url('https://media.istockphoto.com/id/1266459481/vector/shopping-online-in-smartphone-application-digital-marketing-vector-illustration.jpg?s=612x612&w=0&k=20&c=yFTkURyuo4e0qxfCBgISPps6MwYLNAqShj_lxPs2IrQ=')",
			},
		},
	},
	plugins: [],
};
