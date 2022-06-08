require('dotenv').config()

const configDB = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    multipleStatements: true,
    connectionLimit : 100,
    debug: false
}
module.exports = configDB;