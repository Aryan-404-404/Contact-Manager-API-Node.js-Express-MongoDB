const mongoose = require("mongoose")

const contactSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, "Please enter the name"]
    },
    email:{
        type: String,
        required: [true, "Please enter the email"]
    },
    phone:{
        type: Number,
        required: [true, "Please enter the Phone number"]
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model("contact", contactSchema);