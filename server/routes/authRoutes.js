const {
	googleCallbackHandler,
} = require("../controllers/authGoogleCallbackHandler");
const { googleCallback } = require("../middlewares/authMiddleware");
const { getGoogleAuthURL } = require("../utils/googleAuth");

require("dotenv").config();

const router = require("express").Router();

router.get("/google", (req, res) => {
	console.log(req.query);
	res.redirect(getGoogleAuthURL(req.query));
});

router.get("/google/callback", googleCallback, googleCallbackHandler);

router.get("/logout", (req, res) => {
	res
		.cookie("jwtToken", "", {
			httpOnly: true,
			expires: new Date(0),
			secure: true,
			sameSite: "none",
		})
		.redirect(process.env.CLIENT_URL);
});

module.exports = router;
