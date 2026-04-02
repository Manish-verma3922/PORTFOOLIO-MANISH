// const mongoose = require("mongoose")

// const skillSchema = new mongoose.Schema({

// name:{
// type:String,
// required:true
// },

// category:{
// type:String,
// required:true
// },

// level:{
// type:Number,
// required:true
// },

// icon:{
// type:String,
// required:true
// }

// })

// module.exports = mongoose.model("Skill",skillSchema)













const mongoose = require("mongoose")

const skillSchema = new mongoose.Schema({

name:{
type:String,
required:true
},

category:{
type:String,
required:true
},

level:{
type:Number,
required:true
}

})

module.exports = mongoose.model("Skill",skillSchema)