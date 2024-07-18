const userMessage = require('../model/user_message.model')

exports.storeMessages = async(req,res)=>{
    try {
        const {name,email,message} = req.body;
        const msg = new userMessage({name,email,message});
        msg.save()
        console.log(msg)
        res.status(200).json("Thanks for contacting us. We'll respond back at the earliest.");
    } catch (error) {
        console.log("Error: ", error);
        return res.status(500).json(error);
    }
}