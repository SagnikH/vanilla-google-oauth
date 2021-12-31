const { getGoogleAuthURL, getGoogleUser } = require("../utils/google-auth");

require("dotenv").config();

const router = require("express").Router();

router.get("/google", (req, res) => {
	res.redirect(getGoogleAuthURL());
});

router.get("/google/callback", async (req, res) => {
	const code = req.query.code;

	const googleUser = await getGoogleUser({code});
	console.log("google user", googleUser);

	res.json(googleUser);
});


module.exports = router;