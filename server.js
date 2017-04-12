var swig  = require('swig');
var React = require('react');
var Router = require('react-router');
var routes = require('./app/routes');

var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var app = express();
const hostname = '127.0.0.1';
const port = 3000;

app.set('port', process.env.PORT || port);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

/*
 |------------------------------------------------------------------------------
 | 一定要放在express中间件的后面,否则资源文件就会请求失败
 |------------------------------------------------------------------------------
 */
app.use((req, res) => {
	Router.run(routes, req.path, Handler => {
		debugger;
		var html = React.renderToString(React.createElement(Handler));
		var page = swig.renderFile('views/index.html', { html: html });
		res.send(page);
	});
});

app.listen(app.get('port'), () => {
	console.log(`Server running on port ${app.get('port')}/`);
});