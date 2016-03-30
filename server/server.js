var express = require('express')
var app = express()

app.use(
	express.static('../client')
)
app.listen(8080)	//use number port 8080 to listen





