var express = require('express');
var app = express();

app.use(require('connect-livereload')());
app.listen('8888');
