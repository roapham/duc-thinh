const mongoose = require('mongoose');

const Todo = mongoose.model('Todo', {
  text: String,
  complete: Boolean,
});

module.exports = Todo;
