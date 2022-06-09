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