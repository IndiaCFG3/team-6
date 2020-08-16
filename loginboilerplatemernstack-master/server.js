const express = require("express");
const connectDB = require("./config/db");
const app = express();
//Connect database
connectDB();
//Init middleware
app.use(express.json({ extended: false }));
app.get("/", (req, res) =>
  res.json({ msg: "Welcome to the login boiler plate" })
);
//Define Routes
app.use("/api/auth/user", require("./routes/auth"));
app.use("/api/signup/users", require("./routes/users"));
app.use("/api/signu/teacher", require("./routes/teachers"));
app.use("/api/aut/teacher", require("./routes/auth_teachers"));
app.use("/api/addcourse", require("./routes/add_course"));
app.use("/api/viewcourses",require("./routes/getcourses"));
app.use("/api/addlink",require("./routes/add_video.js"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
