'use strict';

const requireTree = require('require-tree');
const controllers = requireTree('../controllers');
const router = require('express').Router();

router
    .get    ('/',                    () => true)
    .get    ('/api/todo/:id?',       controllers.api.todoController.getTodo)
    .post   ('/api/todo',            controllers.api.todoController.postTodo)
    .put    ('/api/todo/:id',        controllers.api.todoController.putTodo)
    .delete ('/api/todo/:id',        controllers.api.todoController.deleteTodo);

module.exports = function(app){
    app.use('/', router);
};
