'use strict';

const $ = {};
const mongoose = require('mongoose');
const todoSchema = mongoose.model('todo');

/**
 * @Route /api/todo/:id?
 * @method GET
 * @param req
 * @param res
 * @return { Array / Object } - todo list / single todo item
 */
$.getTodo = function (req, res) {
    return todoSchema.find(function (err, item) {
        if (!err) {
            return res.send(item);
        } else {
            res.statusCode = 500;
            console.log('Internal error(%d): %s', res.statusCode, err.message);
            return res.send({error: 'Server error'});
        }
    });
};

/**
 * @Route /api/todo
 * @method POST
 * @param req
 * @param res
 * @return status code
 */
$.postTodo = function (req, res) {
    console.log(req.body);
    var reqBody = req.body;

    var todo = {
        cost: reqBody.cost,
        cal: reqBody.cal,
        components: {}
    };

    if (reqBody.components) {
        _forEach(reqBody.components, function(componentValue, componentKey){
            todo.components[componentKey] = componentValue;
1        })
    }

    var todoItem = new todoSchema(todo);

    todoItem.save(function (err) {
        if (!err) {
            res.status(200)
        } else {
            console.log(err);
            if (err.name == 'ValidationError') {
                res.statusCode = 400;
                res.send({error: 'Validation error'});
            } else {
                res.statusCode = 500;
                res.send({error: 'Server error'});
            }
            log.error('Internal error(%d): %s', res.statusCode, err.message);
        }
    });
};

$.putTodo = (req, res) => {

}

$.deleteTodo = (req, res) => {

}

module.exports = $;
