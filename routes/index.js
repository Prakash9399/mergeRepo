const express=require("express")
const router=express.Router()
router.get('/getName',(req,res)=>{
    const {name,password}=req.body;
    res.status(400).json({ })
})

module.exports =router