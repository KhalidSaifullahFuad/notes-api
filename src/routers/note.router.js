// Dependencies
const express = require("express");
const router = express.Router();

// Controllers
const noteController = require("../controllers/note.controller");

// Routes
router.post("/", noteController.create);

router.post("/batch", noteController.create);

router.get("/", noteController.findAll);

router.get("/:noteId", noteController.findOne);

router.put("/:noteId", noteController.update);

router.delete("/:noteId", noteController.remove);

router.get("/search", noteController.search);

// Export
module.exports = router;