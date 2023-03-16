const express = require("express");
const { fetchuser } = require("../Helpers/FetchUser");
const Student = require("../Schema/Student");
const router = express.Router();
const {body , validationResult} = require("express-validator")


router.post("/add"   , async (req,res)=>{
    // return res.send("All Done in my side but I think you are wrong , 'Ashutosh'" )
 try {
    var st1 = new Student(req.body)
    var rsp = await st1.save();
   return res.send(rsp);
 } catch (error) {
    console.log(error);
    return res.send("Internal Server Error");
 }
  
})

router.get("/fetch" , fetchuser ,async (req,res)=>{
    //  Got The Student ID

    try {
        
    var user = req.user.StudentId;
    // check The ID of Student
    var rsp = await Student.findById(user);
   
   return res.send(rsp);
} catch (error) {
    return res.send("Internal Server Error");
 }
})

module.exports = router