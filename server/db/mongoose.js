var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//mongoose.connect(process.env.MONGODB_URI);
//mongoose.connect('mongodb://localhost/Green');
mongoose.connect('mongodb://139.59.89.13:27017/Green');
module.exports = {mongoose};
