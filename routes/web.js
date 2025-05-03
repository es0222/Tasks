const express = require("express");
const router = express.Router();
const siteController = require("../controllers/site.controller");

router.get("/", siteController.index);
router.get("/about", siteController.about);
router.get("/contact", siteController.contact);
router.get("/post", siteController.samplePost);

module.exports = router;
