const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUser);
router.post("/signin", userController.signIn);
router.post("/signup", userController.createUser);
router.put("/update-password", userController.updatePassword);

module.exports = router;
