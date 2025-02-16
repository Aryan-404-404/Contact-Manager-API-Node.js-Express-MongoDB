const express = require("express");
const { registerUser, loginUser, infoUser } = require("../controllers/userController");
const validateToken = require("../middlewares/validateTokenHandler");
const router = express.Router();

router.post("/register", registerUser)
router.post("/login", loginUser)
router.get("/info", validateToken, infoUser)

module.exports = router;