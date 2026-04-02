// const express = require("express")
// const router = express.Router()

// const {createContact} = require("../controllers/contactController")

// router.post("/contact",createContact)

// module.exports = router


















const express = require("express")
const router = express.Router()

const {
createContact,
getMessages,
deleteMessage
} = require("../controllers/contactController")

router.post("/contact",createContact)

router.get("/messages",getMessages)

router.delete("/messages/:id",deleteMessage)

module.exports = router