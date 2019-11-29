const express = require("express");
const router = express.Router();

// Members (API routes)
const membersRoutes = require("./members.routes")
router.use("/", membersRoutes);

module.exports = router;
