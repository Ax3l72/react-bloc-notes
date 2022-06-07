const express = require('express')
const router = express.Router()

// const { getUsers, addNotes, editNotes, deleteNotes } = require('../controllers/NotesControllers')
// const { testMD } = require('../middlewares/test')
const NotesControllers = require('../controllers/NoteController')
// router.route('/notes')
//     .get(getUsers)
//     .post(testMD, addNotes)
//     .put(testMD, editNotes)
//     .delete(deleteNotes)
router.route('/notes')
    .get(new NotesControllers().get)
    .post(new NotesControllers().post)

module.exports = router