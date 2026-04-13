const express = require("express");

const app = express();
app.use(express.json());

const authRouter = require("./routes/auth.routes");
app.use("/api/auth", authRouter); //this is called pre-fix      //http://localhost:3000/api/auth/register

module.exports = app;
