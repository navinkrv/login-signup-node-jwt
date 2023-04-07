const User=require("../model/User")
const bcrypt = require("bcryptjs")
const jwt =require("jsonwebtoken")



   const getAllUser= async (req,res,next)=>{
    let users;
    try{
        users= await User.find();
    }catch(err){
        console.log(err)
    }

    if(!users){
       res.setHeader("Access-Control-Allow-Origin", "*")
         res.status(404).json({msg:"no users found"})
    }
    else{
         res.setHeader("Access-Control-Allow-Origin", "*")
         res.status(200).json({users})
    }
}

//signup

  const signup = async(req,res,next)=>{
    const {name,mobile,email,password} = req.body;
    let existingUser;
    try{
            existingUser= await User.findOne({email})
            
    }catch(err){
        console.log(err)
    }

    if(existingUser){
        return res.status(400).json({msg:"user already available"})
    }
    else{
        const hashedPassword= bcrypt.hashSync(password)
        const user= new User({
            name,
            email,mobile,
            password:hashedPassword,
            blogs:[]
        })

        try{
            user.save();    
        }catch(err){
            console.log(err)
        }
        return res.status(201).json(user);
    }

    
}


//login

  const login = async (req,res,next)=>{
    const {email,password} = req.body;

    let existingUser;
    try{
        existingUser= await User.findOne({email})
        
}catch(err){
    console.log(err)
}

if(!existingUser){
    return res.status(400).json({msg:"User not found!"})
}else{
    const isPasswordCorrect= bcrypt.compareSync(password,existingUser.password);
    if(!isPasswordCorrect){
        return res.status(400).json({msg:"password incorrect"})

    }

    const token=jwt.sign({id:existingUser._id},"demoappSecret")

    return res.status(200).json({msg:"login success",token:token})
}
}

module.exports={login,signup,getAllUser}
