const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    StudentName: {
      type: String,
      required: true,
    },
    Age: {
      type: Number,
      required: true,
    },
    CollegeName: {
      type: String,
      required: true,
    },
    Status: {
      type: String,
      required: true,
      enum: ["placed", "not_placed"],
    },
    BatchName: {
      type: String,
      required: true,
    },
    DSAFinalScore: {
      type: String,
      required: true,
    },
    WebDFinalScore: {
      type: String,
      required: true,
    },
    ReactFinalScore: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
