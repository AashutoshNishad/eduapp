const express = require("express");
const Student = require("../Schema/Student");
const router = express.Router();
const jwt = require("jsonwebtoken")
const jwtsecrate = "Hellow";


router.post("/student/login" , async (req,res)=>{
    
    // res.send(req.body)
    var data = {StudentId: req.body.StudentId};
    var data2 = await Student.findOne(data);
    console.log(data2);
    const check = !(req.body.pass === data2.Password);
    if(check){
        return res.send({Error: true , msg: "Password Not Match"});
    }
    var obj = {
        StudentId: data2._id
    }
   var tocken = jwt.sign(obj , jwtsecrate);
    return res.send({Tocken: tocken});
})



module.exports = router;