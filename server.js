var express = require('express');
app = express();
var path = require('path');

// common configuration
app.use(express.bodyParser());
// Register ejs as .html. If we did
// not call this, we would need to
// name our views foo.ejs instead
// of foo.html. The __express method
// is simply a function that engines
// use to hook into the Express view
// system by default, so if we want
// to change "foo.ejs" to "foo.html"
// we simply pass _any_ function, in this
// case `ejs.__express`.
// app.engine('.html', require('ejs').__express);
// Optional since express defaults to CWD/views
//app.set('views', __dirname + '/views');
// Without this you would need to
// supply the extension to res.render()
// ex: res.render('users.html').
//app.set('view engine', 'html');
// app.use( express.static( __dirname + '/public' ));
app.use(express.static(path.join(__dirname, 'app')));

port = process.env.port || 8000;
// express logger formats
// default, short, tiny and dev
app.use(express.logger('dev'));
app.set('port', port);


app.get('/', function(req, res) {
   res.send("Hello World!");
});

app.listen(app.get("port"));
console.log("Server start on " + app.get("port"));