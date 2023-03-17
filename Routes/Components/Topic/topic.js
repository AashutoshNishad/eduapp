const express = require('express');
const { body } = require('express-validator');
const { fetchuser } = require('../../../Helpers/FetchUser');
const isteacher = require('../../../Helpers/isteacher');
const upload = require('../../../Helpers/upload');
const video = require('../../../Schema/Content/video');
const Teacher = require('../../../Schema/Teacher');
const Topic = require('../../../Schema/Topic');
const topicrouter = express.Router();





topicrouter.post("/create" , fetchuser , async (req,res)=>{

    try {
        

        var {TeacherID} = req.user;
        var teacher = await Teacher.findById(TeacherID)
        if(teacher === null){
                return res.status(401).send("Teacher Not exist !")
        }
        var {title , discription  } = req.body;
        var topc = new Topic({
            title , discription , creater: TeacherID
        })

        var rsp = await topc.save();
        return res.send(rsp);
        
    } catch (error) {
        retur
         res.status(500).send("Internal Server Error ! 🥲🥲")
    }
  
})



// adding video

var saveurl = async (url , type , id)=>{
     var rsp = await Topic.findByIdAndUpdate(id , {$push: {type , url }})
     return res.send(rsp);
}


topicrouter.post("/addvideo" , [body("type" , "body have a type").isLength({min: 3})] , fetchuser, isteacher , (req,res,next)=>{
    try {
        
        if(req.body.type === "Youtube"){
            saveurl(req.body.url , "Youtube" , req.body.topicid)
        }
        next();
        
    } catch (error) {
        console.log(error);
        return res.send("error")
    }
} ,upload.single("video-lecture") ,async (req,res)=>{
    try {

        var {title , discription  } = req.body;
        var rsp = new video({
            title , discription , creater: req.user.TeacherID, url: req.file.path
        })

        var rsp2  = await Topic.findByIdAndUpdate(req.body.topicid, {$push: {video: {type: "File" , url: req.file.path }}})
        return res.send(rsp2);
        
    } catch (error) {
        console.log(error);
        
        return res.send("internal Server error !")
    }

} ) 



topicrouter.post("/addnotes" , [body("type" , "body have a type").isLength({min: 3})] , fetchuser, isteacher , (req,res,next)=>{
    try {
        
        if(req.body.type === "Link"){
            saveurl(req.body.url , "Youtube" , req.body.topicid)
        }
        next();
        
    } catch (error) {
        console.log(error);
        return res.send("error")
    }
} ,upload.single("video-lecture") ,async (req,res)=>{
    try {

        var {title , discription  } = req.body;
        var rsp = new video({
            title , discription , creater: req.user.TeacherID, url: req.file.path
        })

        var rsp2  = await Topic.findByIdAndUpdate(req.body.topicid, {$push: {video: {type: "File" , url: req.file.path }}})
        return res.send(rsp2);
        
    } catch (error) {
        console.log(error);
        
        return res.send("internal Server error !")
    }

} ) 



topicrouter.post("/addsubtopic" , fetchuser , isteacher ,async (req,res)=>{

    try {
        
        var {creater} = (await Topic.findById(req.body.topicid));

        // console.log({creater , req: req.user.TeacherID });
        
        if(req.user.TeacherID != creater ){
        return res.status(401).send("please use correct detail.");
        }

        
        var {title , discription  } = req.body;
        var topc = new Topic({
            title , discription , creater: req.user.TeacherID
        })

        var rsp2 = await topc.save();
        var rsp = await Topic.findByIdAndUpdate(req.body.topicid , {$push: {Subtopic: {id: rsp2._id , name: title}}})
        return res.send(rsp);
    } catch (error) {
        

        // console.log(error);
        

        //

        
        //
+0
        return res.send("interna Server error !");
    
    }
})


topicrouter.get("/fetch" , fetchuser , isteacher , async  (req,res)=>{
    try {
        
        // authorise teacher
        var {creater} = (await Topic.findById(req.body.topicid));

        // console.log({creater , req: req.user.TeacherID });
        
        if(req.user.TeacherID != creater ){
        return res.status(401).send("please use correct detail.");
        }

        var {topicid} = req.body;

        var rsp = await Topic.findById(topicid);

        return res.send(rsp);
        

    } catch (error) {
        return res.send("internal server error");
    }
})

module.exports = topicrouter;

