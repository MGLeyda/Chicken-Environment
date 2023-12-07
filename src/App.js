const express = require('express');
const path = require('path');
const session = require('express-session');
var bodyParser = require('body-parser');
const home = require('./home');
const addFood = require('./add_food');

const app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({extended:false}));

// http://localhost:3000/
app.get('/', function(request, response) {
	// Render login template
	response.render('home');
});

app.post('/home', function(request, response){
	home(request, response);
});

app.get('/home',async function(request,response){

});

app.get('/add_food', function(request, response) {
	response.render('add_food');
});

app.post('/add_food',function(request,response){
	addFood(request,response);
})

app.listen(3000);
