const jwt = require("jsonwebtoken");

const signJWT = (payload) => {
	const jwtToken = jwt.sign(payload, process.env.JWT_PRIVATE_KEY);

	return jwtToken;
};

module.exports = { signJWT };
