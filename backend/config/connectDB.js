// connecting to DB

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
    process.exit(1); // in case of any error
  }
};

module.exports = connectDB;

//  Use this function in server.js to connect to mongoDB ans start the server

// const startServer = async () => {
//   try {
//     await connectDB(); // database connection complete
//     // server listening after DB connection
//     app.listen(PORT, () => {
//       console.log(`Server running on port ${PORT}`);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// startServer();
