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
    ],
    point:{
        type: Number,
        unique: true,
    },
    options: [
        {
            code: {
                type: Number,
                unique: true,
            },
            value: {
                type: String,
                unique: true,
            }
        }
    ],
    topic: {
        type: mongoose.Schema.Types.ObjectId,
    }

})

module.exports = mongoose.model("Question" , Quetions );