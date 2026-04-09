const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

/**
 * @name registerUserController
 * @desc Register a new user, expects username,email,password in request body
 * @access Public
 */

async function registerUserController(req, res) {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({
      message: "Please provide username,email and password",
    });
  }

  const ifUserAlreadyExists = await userModel.findOne({
    $or: [{ email }, { username }],
  });

  //this 2 if statements are checking if the user with same email or username already exists in DB or not, if exists then it will return error message to the client

  //username check
  if (ifUserAlreadyExists.username == username) {
    return res.status(400).json({
      message: "User with this username already exists",
    });
  }

  //email check
  if (ifUserAlreadyExists.email == email) {
    return res.status(400).json({
      message: "User with this email already exists",
    });
  }

  const hash = await bcrypt.hash(password, 10);
  const user = await userModel.create({
    username,
    email,
    password: hash,
  });
  const token = jwt.sign(
    { id: user._id, username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: "1d" },
  );
  res.cookie("token", token);
  res.status(201).json({
    message: "User registered successfully!",
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
    },
  });
}
/**
 *
 * @name loginUserController
 * @desc Login a user,expects email and password in request body
 * @access Public
 */

async function loginUserController(req, res) {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });
  if (!user) {
    return res.status(400).json({
      message: "Invalid email or password!",
    });
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(400).json({
      message: "Invalid email or password!",
    });
  }
}

module.exports = { registerUserController };
