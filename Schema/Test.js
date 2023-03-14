const mongoose = require('mongoose');
const Test = new mongoose.Schema({

    // metadata
    title: {
        type: String,
    },
    discription: {
        type: String,
    },
    creater: {
        type: mongoose
    },
    quetions: [
        
    ],

})
module.exports = mongoose.model("Test" , Test);