// Dependencies
const express = require("express");
const router = express.Router();

// Controllers
const noteController = require("../controllers/note.controller");

// Routes
router.post("/", noteController.create);

router.post("/batch", noteController.create);

router.get("/", noteController.findAll);

router.get("/:id", noteController.findOne);

router.put("/:id", noteController.update);

router.delete("/:id", noteController.remove);

router.get("/search", noteController.search);

// Export
module.exports = router;