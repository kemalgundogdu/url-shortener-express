const express = require("express");
const router = express.Router();
const { shorting } = require("../controllers/urlController");

router.post("/short", shorting);

module.exports = router;