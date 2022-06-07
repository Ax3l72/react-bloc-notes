var mysql = require("mysql")
const configDB = require("./db")

connectPool = mysql.createPool({ ...configDB })

connectPool.config.connectionConfig.queryFormat = function (query, values) {
    if (!values) return query;
    return query.replace(/\:(\w+)/g, function (txt, key) {
        if (values.hasOwnProperty(key)) {
            return this.escape(values[key]);
        }
        return txt;
    }.bind(this));
};

var getConnection = function (done){
    connectPool.getConnection(done)
}
module.exports = { getConnection }