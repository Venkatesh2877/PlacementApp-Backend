const mongoose = require("mongoose");

const interviewSchema = new mongoose.Schema(
  {
    CompanyName: {
      type: String,
      required: true,
    },
    Date: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Interview = mongoose.model("Interview", interviewSchema);

module.exports = Interview;
