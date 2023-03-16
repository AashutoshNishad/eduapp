const mongoose = require('mongoose');
const { boolean } = require('webidl-conversions');

const Student =new mongoose.Schema({
Name: {
    type: String,
    required: true,
},
Class: {
    type: String,
    required: true,
},
Mobile: {
    type: Number,
    required: true,
    length: {
        min: 10,
        max: 10
    }
},
StudentId: {
    type: String,
    default: "id-123",
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
organization: {
    type: String,
    required: true,
},
organizationid: {
    type: String,
    // required: true,
},
todaylogin: {
    type: Number,
}
})

module.exports = mongoose.model("Student" , Student)