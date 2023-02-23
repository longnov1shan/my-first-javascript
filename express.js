//ejs Java script engine... 
// add views folder, make profile view with extention ejs 
//and take parameters and look how to 
//insert them on ejs website frame

var express = require ('express');

var app = express();

var bodyParser = require('body-parser')

var urlencodedParser = bodyParser.urlencoded({ extended: false })

 app.set('view engine', 'ejs');
app.use('/my-first-javascript',express.static('my-first-javascript'));

app.get('/',function (req,res){

	res.render('index');
	console.log ('request was made : '+ req.url);
});

app.get('/contact',function (req,res){
	
	res.render('contact', {qs:req.query});
	
});
//body parsers 17 02 23
app.post('/contact',urlencodedParser,function (req,res){
	console.log (req.body);
	res.render('contact-success', {data: req.body});
	
});

app.get('/profile/:name',function (req,res){
var data = {age:32, job: "jobless", hobbies: ['fishing','snorkling','titfucking']}
	res.render('profile', {person: req.params.name, data:data});

	console.log ('request was made : '+ req.url);
});

app.listen(3000);
