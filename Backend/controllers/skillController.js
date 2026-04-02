// // const Skill = require("../models/Skill")

// // exports.getSkills = async (req,res)=>{

// // try{

// // const skills = await Skill.find()

// // res.json(skills)

// // }catch(error){

// // res.status(500).json({
// // message:"Server error"
// // })

// // }

// // }

















// const Skill = require("../models/Skill")

// // GET SKILLS
// exports.getSkills = async (req,res)=>{

// try{

// const skills = await Skill.find()

// res.json(skills)

// }catch(error){

// res.status(500).json({
// message:"Server error"
// })

// }

// }

// // ADD SKILL
// exports.addSkill = async (req,res)=>{

// try{

// const {name,category,level} = req.body

// const newSkill = new Skill({
// name,
// category,
// level
// })

// await newSkill.save()

// res.json(newSkill)

// }catch(error){

// res.status(500).json({
// message:"Error adding skill"
// })

// }

// }

// // DELETE SKILL
// exports.deleteSkill = async (req,res)=>{

// try{

// await Skill.findByIdAndDelete(req.params.id)

// res.json({
// message:"Skill deleted"
// })

// }catch(error){

// res.status(500).json({
// message:"Error deleting skill"
// })

// }

// }























const Skill = require("../models/Skill")

// GET SKILLS
exports.getSkills = async (req,res)=>{

try{

const skills = await Skill.find()

res.json(skills)

}catch(error){

res.status(500).json({
message:"Server error"
})

}

}


// ADD SKILL
exports.addSkill = async (req,res)=>{

try{

const {name,category,level} = req.body

const newSkill = new Skill({
name,
category,
level
})

await newSkill.save()

res.json(newSkill)

}catch(error){

res.status(500).json({
message:"Error adding skill"
})

}

}


// DELETE SKILL
exports.deleteSkill = async (req,res)=>{

try{

await Skill.findByIdAndDelete(req.params.id)

res.json({
message:"Skill deleted"
})

}catch(error){

res.status(500).json({
message:"Error deleting skill"
})

}

}