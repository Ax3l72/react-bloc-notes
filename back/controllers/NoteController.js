const Notes = require('../models/NotesModel')

class NotesControllers{
    async get(req, res){
        try{
            const notes = new Notes({})
            notes.getAll().then((data) => {
                return res.json({
                    method: req.method,
                    data: data
                })
            })
        }catch(e){
            throw e;
        }
    }

    async post (req, res){
        const { title } = req.body
        let addNotes = new Notes({ title });
        try{
            addNotes.create().then((data) => {
                return res.json({
                    method: req.method,
                    data: req.body
                })
            })
        }catch(e){
            throw e;
        }
    }
}
module.exports = NotesControllers