const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/defult');
const path = require('path');

mongoose.Promise = global.Promise;
mongoose.connect(config.uri,(err) => {
	if(err){
		console.log('Could not connect to database: '+ err)
	}else{
		console.log('Connect to database : '+ config.db)
	}
	
})

app.use(express.static(__dirname+ '/client/dist/'))

app.get('*',(req,res)=>{
	res.sendFile(path.join(__dirname + '/client/dist/index.html'));
	//res.send('<h1>Hello World</h1>');
});

app.listen(8080, ()=>{
	console.log('Listening on Port 8080');
});