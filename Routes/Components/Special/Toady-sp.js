const express = require('express');
const { fetchuser } = require('../../../Helpers/FetchUser');
const getQuote = require('../../../Helpers/Today-special');
const router = express.Router()


var data = {}


router.post("/get" , fetchuser ,async (req,res)=>{

    try {
    var today = new Date();
    var old = true;
    if(!(today.getDate() === data.date)){
         data = await getQuote();
         data.date = today.getDate();
         old = false;
    }
    return res.send({...data , old })
    // console.log(today.getDate());
    } catch (error) {
        return res.send("Error")
    }
   
} )


module.exports = router;