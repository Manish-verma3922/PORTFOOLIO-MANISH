// const Contact = require("../models/Contact")

// exports.createContact = async (req,res) => {

//   try {

//     const {name,email,message} = req.body

//     const newContact = new Contact({
//       name,
//       email,
//       message
//     })

//     await newContact.save()

//     res.status(201).json({
//       success:true,
//       message:"Message sent successfully"
//     })

//   } catch (error) {

//     res.status(500).json({
//       success:false,
//       message:"Server error"
//     })

//   }

// }



















const Contact = require("../models/Contact")

// SEND MESSAGE (frontend form)
exports.createContact = async (req,res)=>{

try{

const {name,email,message} = req.body

const newContact = new Contact({
name,
email,
message
})

await newContact.save()

res.status(201).json({
success:true,
message:"Message sent successfully"
})

}catch(error){

res.status(500).json({
success:false,
message:"Server error"
})

}

}


// GET ALL MESSAGES (Admin dashboard)
exports.getMessages = async (req,res)=>{

try{

const messages = await Contact.find().sort({createdAt:-1})

res.json(messages)

}catch(error){

res.status(500).json({
message:"Server error"
})

}

}


// DELETE MESSAGE
exports.deleteMessage = async (req,res)=>{

try{

await Contact.findByIdAndDelete(req.params.id)

res.json({
message:"Message deleted"
})

}catch(error){

res.status(500).json({
message:"Error deleting message"
})

}

}