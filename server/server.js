const express = require('express');
const bodyParser = require('body-parser');
const fs= require('fs');
var path    = require("path");
const port= process.env.PORT || 3000;

var {mongoose} = require('./db/mongoose');

var app = express();
app.use(bodyParser.json())

var {User} = require('./models/user');
var {RequestTree} = require('./models/requesttree');

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log("we are connected to mongoose db");
// });

app.post('/signup',(req,res)=>{

  User.findOne({email:req.body.email}, (err,doc)=>{
  if(doc){
    var userData = {};
    userData['status']=1;
    userData['message']="user already exists";
    userData['error']="";
    userData['data'] = doc;
    res.send(userData);
  }
  });

  var user = new User({
    email: req.body.email,
    first_name:req.body.first_name,
    last_name:req.body.last_name,
    profile_pic:req.body.profile_pic
  });

  user.save().then((doc) => {
    var userData = {};
    userData['status']=1;
    userData['message']="saved successfully";
    userData['error']="";
    userData['data'] = doc;
    res.send(userData);
  }, (e) => {
    res.status(400).send(e);
  });});



  app.post('/requesttree',(req,res)=>{

console.log(req.body);

    RequestTree.find({
        email:req.body.email
          },(err,docs)=>{

            if(docs.length>=5)
            {
                let data={};
                data['status']=10;
                data['message']='You have old requests pending.'
                return res.send(data);

            }
            var requestTree = new RequestTree({
              email: req.body.email,
              no_of_saplings:req.body.no_of_saplings,
              address_1:req.body.address_1,
              pincode:req.body.pincode,
              mobile_number:req.body.mobile_number,
              name : req.body.name
            });

                requestTree.save().then((doc) => {
                  var data = {};
                  data['status']=1;
                  data['message']="saved successfully";
                  data['error']="";
                  data['data'] = doc;
                  res.send(data);
                }, (e) => {
                  res.status(400).send(e);
                });

          });



  });


app.get('/plantedtress',(req,res)=>{
  RequestTree.find({},(err,docs)=>{
          if(err)
          {
            var data ={};
            data['status']=0;
            data['message']="failed to retrive";
            data['error']=e
            return res.status(400).send(data);
          }

          var data ={};
          data['status']=1;
          data['message']="retrived successfully";
          data['data']=docs;

          res.send(data);
        })
  });

  app.post('/requestedtreesByUser',(req,res)=>{
    RequestTree.find({
        email:req.body.email
          },(err,docs)=>{

            if(err)
            {
              var data ={};
              data['status']=0;
              data['message']="failed to retrive";
              data['error']=e
              return res.status(400).send(data);
            }

            var data ={};
            data['status']=1;
            data['message']="retrived successfully";
            data['data']=docs;

            res.send(data);
          });
    });

app.get('/privacypolicy',(req,res)=>{
  res.sendFile(path.join(__dirname+'/views/terms.html'));
});

app.listen(port,()=>{
  console.log('listening at port ${port}');
});
