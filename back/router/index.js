const express = require('express')
const router = express.Router()

const { getUsers, addNotes } = require('../controllers/NotesControllers')
const { testMD } = require('../middlewares/test')

router.route('/notes')
    .get(getUsers)
    .post(testMD, addNotes)
    
    // router.route('/post')
module.exports = router