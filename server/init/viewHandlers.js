'use strict';
let exphbs = require('express-handlebars'),
    path = require('path');

module.exports = function(app) {
    app.set('views', path.join(__dirname, '../views'));
    var hbs = exphbs.create({
        extname: 'hbs',
        helpers: {
            IF: function (v1, operator, v2, options) {
                switch (operator) {
                    case '==':
                        return (v1 == v2) ? options.fn(this) : options.inverse(this);
                    case '===':
                        return (v1 === v2) ? options.fn(this) : options.inverse(this);
                    case '<':
                        return (v1 < v2) ? options.fn(this) : options.inverse(this);
                    case '<=':
                        return (v1 <= v2) ? options.fn(this) : options.inverse(this);
                    case '>':
                        return (v1 > v2) ? options.fn(this) : options.inverse(this);
                    case '>=':
                        return (v1 >= v2) ? options.fn(this) : options.inverse(this);
                    case '&&':
                        return (v1 && v2) ? options.fn(this) : options.inverse(this);
                    case '||':
                        return (v1 || v2) ? options.fn(this) : options.inverse(this);
                    default:
                        return options.inverse(this);
                }
            }
        }
    });
    app.engine('hbs', hbs.engine);
    app.set('view engine', 'hbs');
}
