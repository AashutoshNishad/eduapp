const mongoose = require('mongoose');


var organization = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    teachers: [
        {}
    ]
})