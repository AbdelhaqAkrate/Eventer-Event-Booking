const conn = require ('../nodeDB/database_Connect')
const connection = conn.getConnection();
connection.connect();

const express = require ('express');

const router = express.Router();

router.get('/',(req,res)=>{
    connection.query('SELECT * FROM events',(err,array,feilds)=>{
        res.send(array)
    });
    // res.send('hello world')
});

module.exports = router