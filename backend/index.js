const express = require("express");
const { connection } = require("./config/db");
const { userRouter } = require("./routes/userRouters");
const cors = require("cors");
const { tripRouter } = require("./routes/TripRouters");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/users", userRouter);
app.use("/api", tripRouter);


app.use("/", async (req, res) => {
  res.send("Server is running");
});

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Connected to mongodb server");
    console.log(`Server is running at port ${process.env.port}`);
  } catch (error) {
    console.log("Error in connecting to the database ", error);
  }
});
