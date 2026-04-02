// // const Project = require("../models/Project")

// // exports.getProjects = async(req,res)=>{

// // try{

// // const projects = await Project.find()

// // res.json(projects)

// // }catch(error){

// // res.status(500).json({
// // message:"Server error"
// // })

// // }

// // }
















// const Project = require("../models/Project")

// // GET ALL PROJECTS

// exports.getProjects = async (req,res)=>{

// try{

// const projects = await Project.find()

// res.json(projects)

// }catch(error){

// res.status(500).json({
// message:"Server error"
// })

// }

// }

















const Project = require("../models/Project")

// GET ALL PROJECTS
exports.getProjects = async (req,res)=>{
  try{

    const projects = await Project.find()

    res.json(projects)

  }catch(error){

    res.status(500).json({
      message:"Server error"
    })

  }
}


// ADD PROJECT
exports.addProject = async (req,res)=>{

  try{

    const {title,desc,image,github,demo} = req.body

    const newProject = new Project({
      title,
      desc,
      image,
      github,
      demo
    })

    await newProject.save()

    res.json(newProject)

  }catch(error){

    res.status(500).json({
      message:"Error adding project"
    })

  }

}


// UPDATE PROJECT
exports.updateProject = async (req,res)=>{

  try{

    const updated = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      {new:true}
    )

    res.json(updated)

  }catch(error){

    res.status(500).json({
      message:"Error updating project"
    })

  }

}


// DELETE PROJECT
exports.deleteProject = async (req,res)=>{

  try{

    await Project.findByIdAndDelete(req.params.id)

    res.json({
      message:"Project deleted"
    })

  }catch(error){

    res.status(500).json({
      message:"Error deleting project"
    })

  }

}