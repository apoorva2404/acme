var keystone = require('keystone');


exports = module.exports = function(req, res) {
    var view = new keystone.View(req, res);
    var locals = res.locals;

    // set locals 
    // hover on nav bar 
    // this key in index.js is linked here it should be same
    locals.section='store';

    // Load products
    view.query('products', keystone.list('Product').model.find())

    view.render('products');
}