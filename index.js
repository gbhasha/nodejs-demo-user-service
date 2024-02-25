const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoute");
const { logger } = require("./middlewares/middleware");
const config = require("./.secrets/config.json");

const app = express();

const PORT = 3000;

app.use(express.json());
// logger
app.use(logger);

app.get("/", (req, res) => {
  res.send("ok");
});

app.use("/users", userRoute);

app.listen(PORT, () => console.log(`App listening at port ${PORT}`));

mongoose
  .connect(config.db_con_string)
  .then(() => console.log("connectb to DB"))
  .catch((e) => console.log("Error connecting to DB", e));
