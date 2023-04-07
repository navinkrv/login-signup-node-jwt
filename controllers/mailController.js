const nodemailer = require("nodemailer");

const username="pran7181@gmail.com"
const password="oyzkgkuijelxmxrm"

const otpSender=(req,res)=>{
async function main() {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: username, // generated ethereal user
        pass: password, // generated ethereal password
      },
    });
  
    let info = await transporter.sendMail({
      from: "pran7181@gmail.com", // sender address
      to: req.body.email, // list of receivers
      subject: "OTP from Demo Application", // Subject line
      text: req.body.otp+" is the OTP for verification in Demo App", // plain text body
    });
  
        res.status(200).send({msg: "msg sent successfully"})
    }
  
  main().catch((err)=>{res.send({error:err})});
  
}




module.exports= {
    otpSender,
}