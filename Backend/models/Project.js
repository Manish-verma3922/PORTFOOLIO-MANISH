// const mongoose = require("mongoose")

// const projectSchema = new mongoose.Schema({

// title:{
// type:String,
// required:true
// },

// desc:{
// type:String,
// required:true
// },

// image:{
// type:String,
// required:true
// },

// github:{
// type:String
// },

// demo:{
// type:String
// }

// })

// module.exports = mongoose.model("Project",projectSchema)
















const mongoose = require("mongoose")

const projectSchema = new mongoose.Schema({

title:{
type:String,
required:true
},

desc:{
type:String,
required:true
},

image:{
type:String,
required:true
},

github:{
type:String
},

demo:{
type:String
}

})

module.exports = mongoose.model("Project",projectSchema)