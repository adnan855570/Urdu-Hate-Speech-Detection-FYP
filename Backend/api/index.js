// api/index.js
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const auth = require("../routes/auth");

// load .env in dev
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const app = express();

const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 2000;

// quick validation so we fail fast with a helpful message
if (!MONGODB_URI || typeof MONGODB_URI !== "string") {
  console.error("MONGODB_URI is not set. Add it to your environment or .env file.");
  process.exit(1);
}

// built-in body parser (body-parser is unnecessary on modern Express)
app.use(express.json());
app.use(cors());

app.use("/api", auth);

app.get("/", (_req, res) => {
  res.status(200).send({ msg: "server running..." });
});

async function start() {
  try {
    await mongoose.connect(MONGODB_URI, {
      // optional but sensible defaults:
      // serverSelectionTimeoutMS: 10000,
      // dbName: process.env.MONGO_DB_NAME, // if your URI doesn't include /dbname
    });
    console.log("DB CONNECTED");
    app.listen(PORT, () => {
      console.log(`app is running at port ${PORT}`);
    });
  } catch (err) {
    console.error("DB CONNECTION ERROR", err);
    process.exit(1); // don't keep nodemon hot-restarting in a loop
  }
}

start();

// optional: log unhandled errors clearly
process.on("unhandledRejection", (err) => {
  console.error("UNHANDLED REJECTION:", err);
});
process.on("uncaughtException", (err) => {
  console.error("UNCAUGHT EXCEPTION:", err);
  process.exit(1);
});
