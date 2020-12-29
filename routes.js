const router=require("express").Router();

router.post("/",(req,res)=>{
    res.status(200).json({status:200,message:"success"})
})


module.exports=router;