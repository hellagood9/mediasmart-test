const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const memberSchema = new Schema(
  {
    id: String,
    name: String,
    age: Number,
    image: String,
    bio: String
  },
  {
    timestamps: true
  }
);

const Member = mongoose.model("Member", memberSchema);
module.exports = Member;
