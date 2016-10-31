const express = require('express'),
	app = express(), port = 1024

app.listen(port)
console.log('Server started on port', port)

var leafdb = require('leafdb')
leafdb.getCollection("exemple", res=>{

	var collection = res

	console.log("\r\n")
	console.log("NAME**", collection.getCollectionName())
	console.log("AUTHOR**", collection.getCollectionAuthor())
	console.log("DATE**", collection.getCollectionDate())

	console.log("\r\n")
	console.log("COLLECTION**", collection)

	collection.insert({"a":3}, (err,res)=>{
		if(err) throw err
		console.log("\r\n")
		console.log("INSERT**", res)

		console.log("\r\n")
		console.log("FIND**", collection.find({'a': 3}))

		collection.update({'a': 3}, {'a': 'TEST**'}, (err,res)=>{
			if(err) throw err
			console.log("\r\n")
			console.log("UPDATE**", res)

			collection.update({'x': 3}, {'x': 4}, (err,res)=>{
				// if(err) throw err
				console.log("\r\n")
				console.log("== SHOULD FAIL ==")
				console.log(err)
				console.log("UPDATE**", res)

				collection.remove({"a":"TEST**"}, (err,res)=>{
					if(err) throw err
					console.log("\r\n")
					console.log("DELETE**", res)
				})
			})
		})
	})
})