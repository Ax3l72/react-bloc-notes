/*
 *
 * Model de 'Notes'
 ******************************/
const connection = require("../config/database/connectDB");

class Notes {
    constructor(notes) {
        this.title = notes.title;
        this.id = notes.id;
    }

    getAll() {
        return new Promise((resolve, reject) => {
            connection.getConnection(function (err, db) {
                if (err) reject(err);
                db.query(`SELECT * FROM notes;`, (err, data) => {
                    if (err) reject(err);
                    resolve(data);
                    // Fin a la connection avec la DB
                    db.release()
                })
            })
        })
    }

    create(){
        return new Promise((resolve, reject) => {
            const { title } = this
            connection.getConnection(function(err, db){
                if(err) reject(err);
                db.query(`INSERT INTO notes SET title=:title`,{title}, (err, data) => {
                    if(err) reject(err);
                    resolve(data);
                    // Fin a la connection avec la DB
                    db.release()
                })
            })
        })
    }
    editID(){
        return new Promise((resolve, reject) => {
            const { title, id } = this
            connection.getConnection(function(err, db){
                if(err) reject(err);
                db.query(`UPDATE notes SET title=:title WHERE id=${id}`,{title}, (err, data) => {
                    if(err) reject(err);
                    resolve(data);
                    //
                    db.release()
                })
            })
        })
    }
    deleteID(){
        return new Promise((resolve, reject) => {
            const { id } = this
            connection.getConnection(function(err, db){
                if(err) reject(err)
                db.query(`DELETE FROM notes WHERE id=${id}`, (err, data) =>{
                    if(err) reject(err);
                    resolve(data);
                    //
                    db.release()
                })
            })
        })
    }   
}
module.exports = Notes;