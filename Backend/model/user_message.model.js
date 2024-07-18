const mongoose = require('mongoose')
const userMessageSchema = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    message:{type:String,required:true}
})
const userMessage = mongoose.model('userMessage',userMessageSchema);
module.exports = userMessage;