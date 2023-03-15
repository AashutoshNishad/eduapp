const mongoose = require('mongoose');
const Topic = new mongoose.Schema({
    // metadata
    title: {
        type: String,
    },
    discription: {
        type: String,
    },
    creater: {
        type: mongoose.Schema.Types.ObjectId
    },
    Subtopic: [
        {
            type: mongoose.Schema.Types.ObjectId
        }
    ],
    video: [
        {
            type: mongoose.Schema.Types.ObjectId
        }
    ],
    notes: [
        {
            type: mongoose.Schema.Types.ObjectId
        }
    ],
    subject: String,
    
})
module.exports = mongoose.model("Topic" , Topic);