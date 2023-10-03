const express = require("express");
const router = express.Router();

const { createUser } = require("../controllers/user.controller");
const {signUp} = require("../controllers/auth.controller")
const { verifyToken, isAdmin, checkRolesExisted, isModerator, checkExistedEmailOrUsername } = require("../middlewares");

router.post("/users", [verifyToken, isAdmin, checkRolesExisted, checkExistedEmailOrUsername], createUser);


module.exports = router;
