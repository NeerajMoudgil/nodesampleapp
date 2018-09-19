var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//mongoose.connect(process.env.MONGODB_URI);
//mongoose.connect('mongodb://localhost/Green');
mongoose.connect('mongodb://127.0.0.1:27017/Green').then().catch((err)=>{
  console.log("mongoose err",err);
});
module.exports = {mongoose};
