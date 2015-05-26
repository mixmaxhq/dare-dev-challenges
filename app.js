var express = require('express');
var serveStatic = require('serve-static')
var app = express();

app.use(require('connect-livereload')());
app.listen('8888');

app.use(serveStatic('challenges', {index: ['index.html']}));
