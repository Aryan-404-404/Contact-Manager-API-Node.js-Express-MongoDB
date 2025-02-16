const asyncHandler = require("express-async-handler")
const User = require("../model/userModel")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
    const userAvailable = await User.findOne({ email })
    if (userAvailable) {
        res.status(400);
        throw new Error("User already registered");
    }
    const hashedPassword = await bcrypt.hash(password, 5);          // 5 is the number of salt
    console.log("hashedPassword: ", hashedPassword);
    const user = await User.create({
        name,
        email, 
        password: hashedPassword,
    })
    if(user){
        res.status(201).json({ id: user.id, email: user.email})
    }else{
        res.status(400);
        throw new Error("The data is incorrect ")
    }
});

const loginUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body;
    if(!email || !password){
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
    const user = await User.findOne({email})
    if(user && (await bcrypt.compare(password, user.password))){
        const accessToken = jwt.sign(
            { 
                user:{
                    name: user.name,
                    email: user.email,
                    password: user.password,
                }
            },
            process.env.ACCESS_TOKEN_SECRET,
            {expiresIn: "1h"}
        )
        res.status(200).json({accessToken})
    }
    else{
        res.status(400)
        throw new Error("Email or password is incorrect")
    }
});


const infoUser = asyncHandler(async (req, res) => {
    res.json(req.user);
});
module.exports = { registerUser, loginUser, infoUser }