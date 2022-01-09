const { signJWT } = require("../utils/jwtUtils");
require("dotenv").config();

//gets the db id now set the jwt token cookie
const googleCallbackHandler = (req, res) => {
	const _id = res.locals._id;
  const redirect = res.locals.redirect;
	console.log("id in auth handler", _id);
  console.log("redirect url", redirect);

	const jwtToken = signJWT({_id});
	console.log("jwt token", jwtToken);

	res
		.cookie("jwtToken", jwtToken, {
			httpOnly: true,
			secure: true,
			sameSite: "none",
		})
		.redirect("http://127.0.0.1:5500/"+redirect);
};

module.exports = { googleCallbackHandler };
