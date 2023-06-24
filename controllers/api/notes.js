const Note = require('../../models/note');

module.exports = {
    addNote
}

async function addNote(req, res) {
    console.log(req.body)
    try {
        const note = await Note.create(req.body);
        res.json(note);
        console.log('Success!');
    } catch (err) {
        res.status(400).json(err)
    }
}