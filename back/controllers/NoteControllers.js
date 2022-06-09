const Connection = require('../config/database/mongConnection')
const Notes = require('../models/NotesMongdel')

const privateProps = new WeakMap();

class NotesControllers extends Connection {
    constructor(){
        super()
        privateProps.set(this.connectDatabase())
    }
    async get (req, res){
        try{
            const dbNotes = await Notes.find()
            console.log(dbNotes)
            return res.json({
                method: req.method,
                data: dbNotes,
                message: "Sucess get"
            })
        }
        catch(e){
            throw e;
        }
    }
}
module.exports = NotesControllers