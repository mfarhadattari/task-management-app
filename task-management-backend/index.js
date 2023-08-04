// app.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config()
const port = process.env.PORT || 5000;

// middleware
const app = express();
app.use(cors());

// connect with mongodb
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/", (req, res) => {
  res.send("Task Manager Server is Running");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
