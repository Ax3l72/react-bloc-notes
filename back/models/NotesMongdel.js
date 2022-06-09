/*
 *
 * Model de 'Article'
 ******************************/

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NoteSchema = new Schema({
    title: {
        type: String,
        default: "J'ai oublie le titre"
    },
    description: [{
        type: Schema.Types.ObjectId,
        default: "la desc"
    }]
})

module.exports = mongoose.model('note', NoteSchema)