const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());
app.use(cookieParser());

const authRouter = require("./routes/auth.routes");
app.use("/api/auth", authRouter); //this is called pre-fix      //http://localhost:3000/api/auth/register

module.exports = app;
