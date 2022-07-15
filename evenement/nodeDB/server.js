var express = require ('express')
var bodyParser = require ('body-parser')
var cors = require ('cors')

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))

app.use(cors());


var data = require('../fetchData/fetch')
app.use('/',data)



app.listen(8080);

console.log('🚀  Server ready at 8080')