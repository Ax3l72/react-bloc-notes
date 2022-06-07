/*
 *
 * Model de 'Notes'
 ******************************/
const connection = require("../config/database/connectDB");

class Notes {
    constructor(notes) {
        this.title = notes.title;
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
    // editOne(){

    // }
    // deleteOne(){

    // }
}
module.exports = Notes;