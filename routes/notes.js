const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Notes = require('../models/Notes');
const JWT_SECRET = process.env.JWT_SECRET;

function verifyToken(req, res, next) {
    const token = req.headers['authorization'];
    if (token === null) return res.sendStatus(401, "hfdn");
    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

router.get('/fetchallnotes', verifyToken, async (req, res) => {
    try {
        const userId=req.user;
        const notes = await Notes.find({ user: req.user });
        res.json(notes);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error occurred verify.")
    }
});

router.post('/addnote', verifyToken, async (req, res) => {
    try {
        const { title, description } = req.body;
        const userId=req.user;

        const note = new Notes({
            title, description, user: req.user
        })
        const savedNote = await note.save()
        res.json(savedNote);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error occured")
    }
})

router.put('/updatenote/:id', verifyToken, async (req, res) => {
    const { title, description} = req.body;
    try {
        const newNote = {};
        if (title) { newNote.title = title };
        if (description) { newNote.description = description };

        let note = await Notes.findById(req.params.id);
        if (!note) { res.status(404).send("Not Found") }
        if (note.user !== req.user) {
            return res.status(401).send('Not Allowed');
        }
        note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });
        res.json({ note });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error occured")
    }
})
router.delete('/deletenote/:id', verifyToken, async (req, res) => {
    try {
        let note = await Notes.findById(req.params.id);
        if (!note) { res.status(404).send("Not Found") }
        if (note.user !== req.user) {
            return res.status(401).send('Not Allowed');
        }
        note = await Notes.findByIdAndDelete(req.params.id);
        res.json({ 'Success': 'Note has been deleted', note: note });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error occured")
    }
})
module.exports = router