const express = require('express')
const router = express.Router()

const { getUsers, addNotes, editNotes, deleteNotes } = require('../controllers/NotesControllers')
const { testMD } = require('../middlewares/test')

router.route('/notes')
    .get(getUsers)
    .post(testMD, addNotes)
    .put(testMD, editNotes)
    .delete(deleteNotes)
    // router.route('/post')
module.exports = router