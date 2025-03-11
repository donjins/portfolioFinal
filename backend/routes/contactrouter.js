const express = require("express");
const { contactHandler, getMessages, getTotalMessageCount } = require("../controllers/contactcontroller");

const router = express.Router();

router.post("/contact", contactHandler);

router.get("/messages", getMessages);
router.get("/messages/count", getTotalMessageCount);


module.exports = router;
