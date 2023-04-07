const { otpSender } = require("../controllers/mailController")

 const router=require("express").Router()

 router.post("/otp",otpSender)

 module.exports=router