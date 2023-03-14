const express = require("express");
const { fetchuser } = require("../Helpers/FetchUser");
const Student = require("../Schema/Student");
const router = express.Router();


router.post("/add" ,async (req,res)=>{
    

    var st1 = new Student(req.body)
    var rsp = await st1.save();

    res.send(rsp);
})

router.get("/fetch" , fetchuser ,async (req,res)=>{

    //  Got The Student ID
    var user = req.user.StudentId;


    // check The ID of Student
    var rsp = await Student.findById(user);
   
    res.send(rsp);
})

module.exports = router