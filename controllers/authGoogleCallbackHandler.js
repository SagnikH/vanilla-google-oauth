const { signJWT } = require("../utils/jwtUtils");
require("dotenv").config();

//gets the db id now set the jwt token cookie
const googleCallbackHandler = (req, res) => {
	const _id = res.locals._id;
	console.log("id in auth handler", _id);

	const jwtToken = signJWT({_id});
	console.log("jwt token", jwtToken);

	res
		.cookie("jwtToken", jwtToken, {
			httpOnly: true,
			secure: true,
			sameSite: "none",
		})
		.redirect(process.env.CLIENT_URL);
};

module.exports = { googleCallbackHandler };
