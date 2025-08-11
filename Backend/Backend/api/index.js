const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const auth = require("../routes/auth");

// Use environment variables for configuration
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/hatespeech";
const PORT = process.env.PORT || 2000;

mongoose
	.connect(MONGODB_URI, {})
	.then(() => {
		console.log("DB CONNECTED");
	})
	.catch((err) => {
		console.error("DB CONNECTION ERROR", err);
	});

app.use(bodyParser.json());
app.use(cors());

app.use("/api", auth);

app.get("/", (req, res) => {
	res.status(200).send({ msg: "server running..." });
});

app.listen(PORT, () => {
	console.log(`app is running at port ${PORT}`);
});
