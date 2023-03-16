const express = require('express');
const getQuote = require('../../../Helpers/Today-special');
const router = express.Router()


var data = {
    date: "",
    quats: "",
}


router.get("/get" ,async (req,res)=>{

    try {
         // console.log(Date().);
    var today = new Date();
    var old = true;
    if(!(today.getDate() === data.date)){
         data.quats = await getQuote();
         data.date = today.getDate();
         old = false;
    }
    return res.send({quats: data.quats , old })
    // console.log(today.getDate());
    } catch (error) {
        return res.send("Error")
    }
   
} )


module.exports = router;