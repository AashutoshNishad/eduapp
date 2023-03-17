const mongoose = require("mongoose");
const Topic = new mongoose.Schema({
  // metadata
  title: {
    type: String,
  },
  discription: {
    type: String,
  },
  creater: {
    type: mongoose.Schema.Types.ObjectId,
  },
  Subtopic: [
    {
        name: {
            type: String,
            required: true,
          },
          id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
          }
    },
  ],
  video: [
    {
      type: {
        type: String,
        required: true,
      },
      url: { type: String, required: true },
    },
  ],
  notes: [
    {
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
  subject: String,
  tag: [
    {
      type: String,
    },
  ],
});
module.exports = mongoose.model("Topic", Topic);
