const router=require("express").Router();

router.post("/",(req,res)=>{
    res.status(200).json({status:200,message:"success"})
})

router.post('/user',(req,res)=>{
    console.log("entered here")
    res.status(200).json({status:200,message:"success",data:req.body})

})


module.exports=router;