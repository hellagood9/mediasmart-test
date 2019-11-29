const Member = require("../models/Member");

const getMembers = async (page) => {
  try {
    const members = await Member.find().skip(page * 21).limit(21);
    return { error: false, data: members };
  } catch (err) {
    console.error(err);
    return { error: true, data: undefined };
  }
};

const getMember = async memberId => {
  try {
    const member = await Member.findOne({ id: memberId });
    if (!member) return { error: true, data: undefined };

    return { error: false, data: member };
  } catch (err) {
    console.error(err);
    return { error: true, data: undefined };
  }
};

module.exports = {
  getMembers,
  getMember
};
