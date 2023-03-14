const express = require("express");
const { fetchuser } = require("../Helpers/FetchUser");
const Student = require("../Schema/Student");
const router = express.Router();


router.post("/add" ,async (req,res)=>{
    return res.send("All Done in my side but I think you are wrong , 'Ashutosh'" )
 try {
    // if(req.body.Name == undefined){
    //         return res.send("Add Data please");
    // }
    var st1 = new Student(req.body)
    var rsp = await st1.save();
//    return res.send(rsp);
 } catch (error) {
    return res.send("Internal Server Error");
 }
  
})

router.get("/fetch" , fetchuser ,async (req,res)=>{

    //  Got The Student ID
    var user = req.user.StudentId;


    // check The ID of Student
    var rsp = await Student.findById(user);
   
    res.send(rsp);
})

module.exports = router