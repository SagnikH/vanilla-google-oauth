const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/authRoutes");
const apiRoutes = require("./routes/apiRoutes");
const cors = require("cors");
require("dotenv").config();

const URI = process.env.MONGODB_URI;
const PORT = process.env.PORT;

const app = express();

(async () => {
	try {
		const connection = await mongoose.connect(URI);

		console.log("conneted to db");
	} catch (e) {
		console.log(e);
	}
})();

//middlewares
app.use(express.json());
app.use(cookieParser());

app.use(
	cors({
		origin: process.env.CLIENT_DOMAIN, // "http://localhost:3000"
		methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
		credentials: true, // allow session cookie from browser to pass through
	})
);

app.use("/auth", authRoutes);
app.use("/api", apiRoutes);

app.get("/", (req, res) => {
	res.send("Let's start");
});

app.listen(PORT || 4000, () => {
	console.log(`connected to port ${PORT}`);
});
