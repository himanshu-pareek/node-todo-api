const {ObjectID} = require ('mongodb');

const {mongoose} = require ('./../server/db/mongoose');
const {Todo} = require ('./../server/models/todo');
const {User} = require ('./../server/models/user');

/*
Todo.remove ({}).then ((result) => {
	console.log (result);
});
*/

Todo.findByIdAndRemove ('5aa2ee671fb0221f2570f828').then ((todo) => {
	console.log (todo);
});

