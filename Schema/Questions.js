const mongoose = require('mongoose');

const Quetions = new mongoose.Schema({
    question: {
        type: String,
    },
    level: {
        type: Number,
        default: 0,
    },
    type: {
        type: String,
        enum: ["MCQ" , "MSQ" , "NAD" , "OTHER"],
    },
    answer: {
        type: String,
    },
    creater: {
        type: String,
    },
    date: {
        type: Date,
    },
    tag: [
        {
            type: String,
        }
    ]

})

module.exports = mongoose.model("Question" , Quetions );