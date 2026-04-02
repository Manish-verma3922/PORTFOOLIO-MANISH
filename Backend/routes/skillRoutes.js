// // const express = require("express")
// // const router = express.Router()

// // const {getSkills} = require("../controllers/skillController")

// // router.get("/skills",getSkills)

// // module.exports = router










// const express = require("express")
// const router = express.Router()

// const {
// getSkills,
// addSkill,
// deleteSkill
// } = require("../controllers/skillController")

// router.get("/skills",getSkills)

// router.post("/skills",addSkill)

// router.delete("/skills/:id",deleteSkill)

// module.exports = router














const express = require("express")
const router = express.Router()

const {
getSkills,
addSkill,
deleteSkill
} = require("../controllers/skillController")

router.get("/skills",getSkills)

router.post("/skills",addSkill)

router.delete("/skills/:id",deleteSkill)

module.exports = router