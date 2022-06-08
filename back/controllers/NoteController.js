const Notes = require('../models/NotesModel')

class NotesControllers{
    async get(req, res){
        try{
            const notes = new Notes({})
            notes.getAll().then((data) => {
                return res.json({
                    method: req.method,
                    data: data,
                    message: "sucess get"
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
                console.log('losd', data);
                return res.json({
                    method: req.method,
                    data_post: req.body,
                    message: "sucess post"
                })
            })
        }catch(e){
            throw e;
        }
    }
    async put (req, res){
        const { title, id } = req.body
        let editNotes = new Notes({ title, id });
        try{
            editNotes.editID().then((data) => {
                return res.json({
                    method: req.method,
                    data: req.body,
                    message: "Sucess edit"
                })
            })
        }catch(e){
            throw e;
        }
    }
    async delete (req, res){
        const { id } = req.body
        let deleteNotes = new Notes({ id })
        try{
            deleteNotes.deleteID().then((data) => {
                return res.json({
                    method: req.method,
                    data: req.body,
                    message: "Sucess delete"
                })
            })
        }catch(e){
            throw e;
        }
    }
}
module.exports = NotesControllers