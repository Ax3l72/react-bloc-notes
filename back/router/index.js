const express = require('express')
const router = express.Router()

const { testMD } = require('../middlewares/test')
const NotesControllers = require('../controllers/NoteController')

// Utilisation du MD après toute les routes qui suivent
router.use(testMD)

router.route('/notes')
    .get(new NotesControllers().get)
    .post(new NotesControllers().post)
    .put(new NotesControllers().put)
    .delete(new NotesControllers().delete)

module.exports = router