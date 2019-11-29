const express = require("express");
const router = express.Router();

const { getMembers, getMember } = require("../controllers/member.controller");

router.get("/members", getMembers);
router.get("/members/:id", getMember);

module.exports = router;
