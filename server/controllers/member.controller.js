require("dotenv").config();

const memberLogic = require("../logic/member.logic");

const getMembers = async (req, res) => {
  const { page } = req.query;

  const { error, data } = await memberLogic.getMembers(page);
  if (data.length === 0) return res.status(200).json([]);

  res.status(200).json(data);
};

const getMember = async (req, res) => {
  try {
    const { id: memberId } = req.params;    
    
    const { error, data } = await memberLogic.getMember(memberId);
    if (!data) return res.status(404).json({ message: "Member not found" });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getMembers,
  getMember
};
