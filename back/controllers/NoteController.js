const Connection = require('../config/database/mongConnection')
const Notes = require('../models/NotesModel')

const privateProps = new WeakMap();

class NotesControllers extends Connection {
    constructor(){
        super()
        privateProps.set(this.connectDatabase())
    }
    async get (req, res){
        try{
            const dbNotes = await Notes.find()
            // console.log(dbNotes)
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

    async post (req, res){
        try{
            const { data } = req.body
            // console.log(req.body)
            if(data){
                const notes = new Notes({
                    title: data
                })

                notes.save((err) => {
                    if(err) return handleError(err)
                })

                return res.json({
                    data: await Notes.find()
                })
            } 
            else return res.json({
                message:'Error',
                data: []
            })
        }catch(e){
            throw e;
        }
    }

    async updateID (req, res){
        try{
            const { data} = req.body
            Notes.findByIdAndUpdate(
                req.params.id,
                { title: data },
                async (err, data) => {
                    if(err) throw err;
                    return res.json({
                        message: "update ok",
                        data: await Notes.find()
                    })
                }
                )
        }catch(e){
            throw e;
        }
    }

    async deleteID (req, res){
        try{
            Notes.findByIdAndDelete(
                req.params.id,
                async (err, data) => {
                    if(err) throw err;
                    return res.json({
                        message: "delete ok",
                        data: await Notes.find()
                    })
                }
            )
        }catch(e){
            throw e;
        }
    }

}
module.exports = NotesControllers