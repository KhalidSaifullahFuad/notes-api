// Dependency
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

// Middleware
app.use(express.json());
app.use(cors());

// Router
app.use("/api/notes", require("./src/routers/note.router"));

// Environment Variables
const PORT = process.env.PORT || 3000;

// Routes
app.get("/", (req, res) => {
	res.status(200).json({
		api: "Notes API",
		version: "1.0.0",
		author: "Khalid Saifullah Fuad",
	});
});

// Server
app.listen(PORT, () => {
	console.log(`\x1b[34m> Server is running on port ${PORT}...\x1b[0m`);
});
