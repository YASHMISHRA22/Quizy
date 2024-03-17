const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const authRouter = require("./routes/auth/auth");
const quizRouter = require("./routes/quiz");
const lboardRouter = require("./routes/leadboard");

//estalishing mongodb connection


mongoose.connect(process.env.MONGO_URL_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define API routes (e.g., /api/quizzes, /api/questions, etc.)

const PORT = process.env.PORT || 5000;

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
//MIDDLEWARE -> DISALBING CORS
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/userAuth", authRouter);
app.use("/quiz", quizRouter);
app.use("/lboard", lboardRouter);


module.exports = app;
