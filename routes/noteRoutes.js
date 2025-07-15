const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/notes.json");

function loadNotes() {
  return JSON.parse(fs.readFileSync(filePath));
}

function saveNotes(data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

// GET all notes
router.get("/notes", (req, res) => {
  const notes = loadNotes();
  res.json(notes);
});

// GET note by ID
router.get("/notes/:id", (req, res) => {
  const id = Number(req.params.id);
  const notes = loadNotes();
  const note = notes.find((n) => n.id === id);
  if (!note) return res.status(404).json({ error: "Note not found" });
  res.json(note);
});

// POST new note
router.post("/notes", (req, res) => {
  const notes = loadNotes();
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: "Both 'title' and 'content' are required" });
  }

  const newNote = {
    id: notes.length ? notes[notes.length - 1].id + 1 : 1,
    title,
    content,
  };

  notes.push(newNote);
  saveNotes(notes);
  res.status(201).json({ message: "Note added", note: newNote });
});

// PUT update note by ID
router.put("/notes/:id", (req, res) => {
  const id = Number(req.params.id);
  const notes = loadNotes();
  const note = notes.find((n) => n.id === id);

  if (!note) return res.status(404).json({ error: "Note not found" });

  if (req.body.title) note.title = req.body.title;
  if (req.body.content) note.content = req.body.content;

  saveNotes(notes);
  res.json(note);
});

// DELETE note by ID
router.delete("/notes/:id", (req, res) => {
  const id = Number(req.params.id);
  const notes = loadNotes();
  const note = notes.find((n) => n.id === id);

  if (!note) return res.status(404).json({ error: "Note not found" });

  const newNotes = notes.filter((n) => n.id !== id);
  saveNotes(newNotes);

  res.json({
    message: `Note with id ${id} deleted successfully`,
    deleted: note,
  });
});

module.exports = router;
