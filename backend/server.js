require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");

const app = express();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected"))
  .catch(() => console.log("Not Connected"));

app.use(express.json());

app.use("/api/auth/", authRoute);
app.use("/api/users/", userRoute);
app.use("/api/posts/", postRoute);

app.get("/api/numbers", (req, res) => {
  res.json(["bir", "iki"]);
});

app.listen(8800, console.log("Running on 8800"));
