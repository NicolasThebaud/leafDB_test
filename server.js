const express = require('express'),
	app = express(), port = 1024

app.listen(port)
console.log('Server started on port', port)

var leafdb = require('leafdb')
leafdb.getCollection("exemple", res=>{
	console.log(res)
})