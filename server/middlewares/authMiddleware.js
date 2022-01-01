const User = require("../models/userModel");
const { getGoogleUser } = require("../utils/googleAuth");
require("dotenv").config();

//takes the info & sets in db
//send the mongodb _id onto handler
const googleCallback = async (req, res, next) => {
	const code = req.query.code;

	try {
		const googleUser = await getGoogleUser({ code });
		// console.log("google user", googleUser);

		const { email, name, id, picture } = googleUser;

		var user = await User.findOne({ email });

		if (!user){
      console.log("creating new user");
			user = await User.create({ email, name, googleID: id, picture });
    }

		res.locals._id = user._id;
		next();
	} catch (e) {
		console.error(e);
		res.status(500).json(e);
	}
};

module.exports = { googleCallback };
