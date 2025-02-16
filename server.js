const express = require("express");
const errorHandler = require("./middlewares/errorHandler");
const connectDB = require("./config/DBconnection");
const dotenv = require("dotenv").config();
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json())         // This parses the json data from user, without it, express can not understand json data from request
app.use("/api/contacts", require("./routes/contactRouter"))
app.use("/api/user", require("./routes/userRouter"))
app.use(errorHandler)

connectDB();

app.get('/', (_req, res)=>{
    res.status(200).json({name: "Aryan"})
})

app.listen(PORT, ()=>{
    console.log(`Your server is running on ${PORT}`);
})
