// // const express = require("express")
// // const router = express.Router()

// // const {getProjects} = require("../controllers/projectController")

// // router.get("/projects",getProjects)

// // module.exports = router










// const express = require("express")
// const router = express.Router()

// const {getProjects} = require("../controllers/projectController")

// router.get("/projects",getProjects)

// module.exports = router












const express = require("express")
const router = express.Router()

const {
getProjects,
addProject,
updateProject,
deleteProject
} = require("../controllers/projectController")

// GET ALL
router.get("/projects",getProjects)

// ADD
router.post("/projects",addProject)

// UPDATE
router.put("/projects/:id",updateProject)

// DELETE
router.delete("/projects/:id",deleteProject)

module.exports = router