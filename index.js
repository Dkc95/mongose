const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const Dishes = require('./models/schema');
const url = 'mongodb://localhost:27017/Midb';   //'Midb' is our databse name
const connect = mongoose.connect(url,
{
	useMongoClient:true
});

connect.then((db) =>{
	console.log('Connected corrected to server');
	var newDish = Dishes({
name:'deepak',
description:'tring2'
	});
	newDish.save()
	          .then((dish)=>{
	          	console.log(dish);
	          	return Dishes.find({}).exec();
	          })

	   .catch((err)=>{
	   	console.log(err);
	   });
	});
