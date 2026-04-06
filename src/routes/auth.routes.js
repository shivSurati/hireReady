const { Router } = require("express");
const authRouter = Router();
/*this top part can be written like this also
const express=require("express");
const authRouter=express.Router(); 
this both way of writing makes the same thing*/

const authController = require("../controllers/auth.controller");

/**
 * @route Post /api/auth/register
 * @desc Register a new user
 * @access Public
 */
authRouter.post("/register", authController.registerUserController);

module.exports = authRouter;
