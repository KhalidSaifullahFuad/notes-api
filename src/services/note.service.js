// Dependencies
const Note = require("../models/note.model");

// Service methods
const create = async (note) => {
	return await Note.create(note);
};

const createBatch = async (notes) => {
	return await Note.insertMany(notes);
};

const findAll = async () => {
	return await Note.find().sort({ date: -1 });
};

const findOne = async (id) => {
	return await Note.findById(id);
};

const update = async (id, note) => {
	return await Note.findByIdAndUpdate(id, note, { new: true });
};

const remove = async (id) => {
	return await Note.findByIdAndRemove(id);
};

// search query with pagination
async function search(query, page = 1, limit = 20) {
	const results = await Note.find({
            $or: [
                { title: { $regex: query, $options: "i" } },
                { content: { $regex: query, $options: "i" } },
            ],
        })
		.skip((page - 1) * limit)
		.limit(limit);
	return results;
}

// Export service methods
module.exports = {
	create,
	createBatch,
	findAll,
	findOne,
	update,
	remove,
	search,
};
