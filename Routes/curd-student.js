const express = require("express");
const Teacher = require("../Schema/Teacher");
const router = express.Router();


router.post("/add" ,async (req,res)=>{
    

    var st1 = new Teacher(req.body)
    var rsp = await st1.save();

    res.send(rsp);
})

module.exports = router