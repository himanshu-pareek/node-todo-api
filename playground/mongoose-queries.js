const {ObjectID} = require ('mongodb');

const {mongoose} = require ('./../server/db/mongoose');
const {Todo} = require ('./../server/models/todo');
const {User} = require ('./../server/models/user');

// var id = '5a93ef842278ea74265f6520';
//
// if (!ObjectID.isValid (id)) {
//     return console.log('ID not valid');
// }
//
// Todo.find ({
//     _id: id
// }).then ((todos) => {
//     console.log('Todos', todos);
// });
//
// Todo.findOne ({
//     _id: id
// }).then ((todo) => {
//     console.log('Todo', todo);
// });
//
// Todo.findById(id).then ((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo by Id', todo);
// }).catch ((e) => {
//     console.log(e);
// });

User.findById ('5a93c7f47aabafcf0e1a5553').then ((user) => {
    if (!user) {
        return console.log('Unable to find the user');
    }
    console.log(JSON.stringify (user, undefined, 4));
}, (e) => {
    console.log(e);
});
