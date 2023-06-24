const Note = require('../../models/note');

module.exports = {
    index,
    addNote
}

async function index(req, res) {
    const notes = await Note.find({ user: req.user._id});
    res.json(notes)
}

async function addNote(req, res) {
    try {
        const note = await Note.create(req.body);
        res.json(note);
    } catch (err) {
        res.status(400).json(err)
    }
}