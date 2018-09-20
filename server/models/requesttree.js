var mongoose = require('mongoose');
var RequestTreeSchema = new mongoose.Schema({
  no_of_saplings:{
    type: Number,
    required: true
  },
  name :{
    type:String,
    default:"Earth lover"
  },
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  },
  address_1: {
    type: String,
    required: true,
    minlength: 1
  },
  pincode: {
    type: String,
  },
  mobile_number: {
    type: Number,
    required: true,
    minlength: 9
  },
  latitude :{
    type:String,
    default:null
  },
  longitude :{
    type:String,
    default:null
  },
  isPlanted:{
    type:Boolean,
    default:false
  },
  right_time_to_contact:{
    type:String,
    default:null
  },
  plant_name:{
    type:String,
    default:null
  },
  createdAt :
  { type : Date, default: Date.now }
});

var RequestTree = mongoose.model('requestTree', RequestTreeSchema);

module.exports = {RequestTree}
