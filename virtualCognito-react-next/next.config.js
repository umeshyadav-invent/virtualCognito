const path = require("path");
const withPWA = require("next-pwa");

module.exports = withPWA({
	pwa: {
		disable: process.env.NODE_ENV === "development",
		// dest: 'public',
		register: true,
		sw: "/sw.js",
	},
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
	env: {
		JWT_SECRET: "bjdggfuqgkjsnjbcjhadybd",
		SENDGRID_KEY: "SG.........",
		CLOUDINARY_URL: "https://api.cloudinary.com/v1_1/.......",
		CLOUDINARY_VIDEO_URL: "https://api.cloudinary.com/v1_1/.......",
		STRIPE_SECRET_KEY: "sk_test_......",
		STRIPE_PUBLISHABLE_KEY: "pk_test_.........",
	},
});
