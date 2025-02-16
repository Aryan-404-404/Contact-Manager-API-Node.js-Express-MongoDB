const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    name:{
        type: String,
        required: [true, "Please enter the name"]
    },
    email:{
        type: String,
        required: [true, "Please enter the email"],
        unique: [true]
    },
    password:{
        type: String,
        required: [true, "Please enter the Password"]
    }
},
{
    timestamps: true,
})

module.exports = mongoose.model("user", userSchema)