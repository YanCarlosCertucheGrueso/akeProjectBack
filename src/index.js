var express = require('express');
var bodyParser = require('body-parser');
var fs=require('fs');
var data=fs.readFileSync('src/Movies.json', 'utf8');
var words=JSON.parse(data);
var Akelab = '123456789';
var cors = require('cors')
var app = express();


var port = process.env.PORT || 3525;

// Convierte una petición recibida (POST-GET...) a objeto JSON
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(cors({origin: '*'}));
app.get('/movies/:token', function(req, res){
    let token = req.params.token;
    console.log(token)
    if(token === Akelab){
	    res.status(200).send(words);
        console.log("se envió")
    }
    else{
        res.status(201).send({messege : 'need token'})
    }
});

app.listen(port, function(){
	console.log(`Server running in http://localhost:${port}`);
	console.log('Defined routes:');
	console.log('	[GET] http://localhost:3525/');
});