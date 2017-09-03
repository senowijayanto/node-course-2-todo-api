const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} =  require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Remove all
// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

// Todo.findOneAndRemove({_id: '59ab8eb04a4156660f96eee6'}).then((todo) => {
//   console.log(todo);
// });

// Todo.findByIdAndRemove('59ab8ea94a4156660f96eee5').then((todo) => {
//   console.log(todo);
// });
