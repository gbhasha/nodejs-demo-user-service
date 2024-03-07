const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoute");
const { logger } = require("./middlewares/middleware");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(express.json());
// logger
app.use(logger);

app.get("/", (req, res) => {
  res.send("ok");
});

app.use("/users", userRoute);

mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log("connected to DB");
    app.listen(process.env.PORT, () =>
      console.log(`App listening at port ${process.env.PORT}`)
    );
  })
  .catch((e) => console.log("Error connecting to DB", e));
