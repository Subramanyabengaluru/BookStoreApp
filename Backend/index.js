const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')

const app = express();

app.use(cors());
app.use(express.json());

//to access the env variables
dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

//connection with mongodb
try {
    mongoose.connect(URI, {
        useNewUrlParser: true
    });
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error: ", error);
}

// app.get('/',(req,res)=>{
//     res.send("Testing");
// })

// defining routes

const bookRoute = require("./route/book.route");
const userRoute = require("./route/user.route");
const userMessageRoute = require("./route/user_message.route")

app.use("/book", bookRoute);
app.use("/user", userRoute);
app.use("/contactus",userMessageRoute);


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});