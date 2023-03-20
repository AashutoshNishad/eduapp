const express = require('express');
const { fetchuser } = require('../../../Helpers/FetchUser');
const Questions = require('../../../Schema/Questions');
const Test = require('../../../Schema/Test');
const router = express.Router();



router.post("/question/add" ,async (req,res)=>{

    var options = [];
    for (const key in req.body) {
        if (Object.hasOwnProperty.call(req.body, key)) {
           
            if(key.indexOf("option") > -1 ){
                const element = req.body[key];
                options.push({
                    code: (key.replace("option" , "")),
                    value: element
                })
            }
           
        }
    }

    // console.log(options);
    
    var data = new Questions({...req.body , options: options });

    var rsp = await data.save();
    // console.log(req.body);
    return res.send({id: rsp._id});
})

router.post("/question/fetch-id" , async (req,res)=>{
    var id = req.body.id;
    // var rsp = await Questions.findOne({_id: id});
    var rsp =await Questions.findById({_id: id});
 return res.send({id , rsp});
})
router.post("/question/fetch" , async (req,res)=>{
    var filter = req.body;
    var rsp = await Questions.find(filter)
    // var rsp =await Questions.findById({_id: id});
 return res.send({ rsp});
})


router.post("/test/create" ,async (rea,res)=>{

    var data = rea.body;

    var d = new Test(data);
    var rsp =await d.save();

    return res.send({data,  rsp});
})

router.post("/test/addquestion" ,async (req,res)=>{
    return res.send(req.body)
    var rsp = await Test.findByIdAndUpdate(req.body.id, { $push: { quetions: { $each: req.body.questions } } })

    return res.send(rsp);
})

router.post("/test/submit" , fetchuser, async (req,res)=>{
    try {
        var data = req.body.answersheet;
        /*

        data = 
        ++++++++++
        [
            {
            qid: 
            opid:
            }
        ]
        +++++++++

        */
        // console.log(data);
        

    } catch (error) {
        console.log(error);
        console.log("Internal server error . !");
    }
})

module.exports = router