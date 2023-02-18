const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/connectDB");
const mongoose = require("mongoose");
const Task = require("./models/taskmodel");
const taskRoutes = require("./routes/taskRoute");

const app = express();

// Middleware
app.use(express.json()); // express json middleware
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://mern-task-app-frnt.onrender.com",
    ],
  })
); // allows resource sharing btw fronend and backend
app.use("/api/tasks", taskRoutes); // router is available for use

// Routes
app.get("/", (req, res) => {
  res.send("Home Page");
});

const PORT = process.env.PORT || 5000; // setting up a port number

// mongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
