var db = require ('./database_config')

var mysql = require ('mysql')

module.exports = {
    getConnection : () => {
        return mysql.createConnection(db)
    }
}