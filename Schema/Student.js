const mongoose = require('mongoose');

const Student =new mongoose.Schema({
Name: {
    type: String,
    required: true,
},
Class: {
    type: Number,
    required: true,
},
Mobile: {
    type: Number,
    length: {
        min: 10,
        max: 10
    }
},
StudentId: {
    type: String,
    length: 5,
},
Password: {
    type: String,
    required: true,
    default: "1234567"
},
points: {
    type: Number,
},

})

module.exports = mongoose.model("Student" , Student)