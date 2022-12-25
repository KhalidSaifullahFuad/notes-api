// Service
const noteService = require("../services/note.service");
const Note = require("../models/note.model");

// Create and Save a new Note
exports.create = (req, res) => {
	// Check if request body is an array
	if (req.body instanceof Array) {
		const notes = req.body.map((note) => {
			return new Note({
				title: note.title,
				content: note.content,
				tags: note.tags,
			});
		});

		noteService.createBatch(notes).then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({ message: "Failed to create notes" });
        });
	} else if(req.body.content) {
		// Create a Note
		const note = new Note({
			title: req.body.title,
			content: req.body.content,
			tags: req.body.tags,
			date: new Date().toISOString(),
		});

		// Save Note in the database
		noteService.create(note).then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({ message: "Failed to create note" });
        });
	} else {
		res.status(400).send({ message: "Note content can not be empty" });
	}
};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
	noteService.findAll().then((notes) => {
        if (!notes.length) {
            return res.status(404).send({ message: "No notes found" });
        }
        res.send(notes);
    })
    .catch((err) => {
        res.status(500).send({ message: "Couldn't retrieve notes" });
    });
};

// Find a single note with a noteId
exports.findOne = (req, res) => {
	noteService.findOne(req.params.noteId).then((note) => {
        if (!note) {
            throw new Error();
        }
        res.send(note);
    })
    .catch((err) => {
        res.status(404).send({ message: "Note not found" });
    });
};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {
	noteService.update(req.params.noteId, req.body).then((note) => {
        if (!note) {
            throw new Error();
        }
        res.send(note);
    })
    .catch((err) => {
        res.status(404).send({ message: "Note not update" });
    });
};

// Delete a note with the specified noteId in the request
exports.remove = (req, res) => {
	noteService.remove(req.params.noteId).then((note) => {
        if (!note) {
            throw new Error();
        }
        res.send({ message: "Note deleted successfully" });
    })
    .catch((err) => {
        res.status(500).send({ message: "Could not delete note" });
    });
};

// Search for notes
exports.search = (req, res) => {
	const query = req.query.query;
	const page = req.query.page;
	const limit = req.query.limit;

	noteService.search(query, page, limit).then((notes) => {
        if (!notes.length) {
            return res.status(404).send({ message: "No notes found" });
        }
        res.send(notes);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).send({ message: "Failed to search notes." });
    });
};
