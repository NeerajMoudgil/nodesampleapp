var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    unique: true
  },
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  },
  profile_pic: {
    type: String,
    trim: true,
  },
  createdAt :
  { type : Date, default: Date.now }
});

var User = mongoose.model('User', UserSchema);

module.exports = {User}
