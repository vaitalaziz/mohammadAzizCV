

var express = require('express');
var path = require('path');
//var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
//var expressValidator = require('express-validator');
//var session = require('express-session');
//var flash = require('connect-flash');
var multer = require('multer');
var upload = multer({ dest: './public/images/portfolio' });  


// Route Files
var routes = require('./routes/index');

// Init App
var app = express();

// Body Parser
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));




// Public Folder
app.use(express.static(path.join(__dirname, 'public')));

// View Engine
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Connect Flash
// app.use(flash());

app.use('/', routes);


app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function(){
	console.log('Server started on port: '+app.get('port'));
});