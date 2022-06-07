// Import des modules
const
bodyParser = require('body-parser'),
cors = require('cors'),
mysql = require('mysql'),
router = require('./router');

class Server {
    constructor(app, port){
        this.app = app;
        this.port = port;
    }
    run(){
        // Config body parser
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({extended:false}))

        // Config cors
        this.app.use(cors({
            origin: ['http://localhost:3000', 'http://192.168.1.79:3000'],
            methods: ['GET', 'POST', 'PUT', 'DELETE'],
            credentials: true
        }))
        // Config Router
        this.app.use('/api',router)

        return this.app.listen(this.port, () => {
            try{
                console.log(`Le server tourne sur 127.0.0.1:${this.port} ...🚀`);
            }catch(e){
                throw e;
            }
        })
    }
}
module.exports = Server;

// Body parser
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

// // Cors
// app.use(cors({
//     origin: ['http://localhost:3000', 'http://192.168.1.79:3000'],
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     credentials: true
// }))

// Configuration Mysql pour se connecter a la DB
// let configDB = {
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_DATABASE,
//     multipleStatements: true
// }
// MYSQL
// db = mysql.createConnection(configDB);

// db.config.queryFormat = function (query, values) {
//     if (!values) return query;
//     return query.replace(/\:(\w+)/g, function (txt, key) {
//         if (values.hasOwnProperty(key)) {
//             return this.escape(values[key]);
//         }
//         return txt;
//     }.bind(this));
// };


// const util = require("util");
// db.query = util.promisify(db.query).bind(db);

// db.connect((err) => {
//     if (err) console.error('error connecting: ' + err.stack);
//     console.log('connected as id ' + db.threadId);
// });

// Router
// app.use('/api', router)


// app.listen(2022)

