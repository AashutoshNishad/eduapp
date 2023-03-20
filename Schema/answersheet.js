const mongoose = require("mongoose");

var answersheet = new mongoose.Schema({

    

        qid: {
            type: mongoose.Schema.Types.ObjectId,
            required: true, 
        },
        opid: {
            type: mongoose.Schema.Types.ObjectId,
            // required: true, 
            // default: -
        },
})

module.exports = mongoose.model("answersheet", answersheet);
