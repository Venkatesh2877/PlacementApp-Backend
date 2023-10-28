const mongoose = require("mongoose");

const resultsSchema = new mongoose.Schema(
  {
    StudentID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
    },
    InterviewID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Interview",
    },
    Result: {
      type: String,
      required: true,
      enum: ["PASS", "FAIL", "On Hold", "Didnot Attempt"],
    },
  },
  {
    timestamps: true,
  }
);

const Results = mongoose.model("Results", resultsSchema);

module.exports = Results;
