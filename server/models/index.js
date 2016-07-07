const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.model('todo', new Schema({
    type: { type: String, required: true },
    name: { type: String, required: true },
    color: { type: String, required: true },
    cost: { type: Number, required: true },
    callories: { type: Number, required: true },
    posted: { type: Date, default: Date.now }
}));
