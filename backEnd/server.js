require('dotenv').config()
const express = require('express');
const app = express();
const helmet = require('helmet')
const morgan = require('morgan')
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
let User = require('./userModel');

const port = process.env.PORT
const db_url = process.env.DB_URL


mongoose.Promise = global.Promise;
mongoose.connect(db_url, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);


app.use(helmet());
app.use(morgan('combined'))
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(port, function(){
  console.log('Server is running on Port:',port);
});

//######## routes ##########
app.get('/',(req,res)=>{
    console.log('route: /');
    res.send('root')
})

//  add user route
app.post('/user/add',function (req, res) {
  let user = new User(req.body);
  user.save()
    .then(user => {
      res.status(200).json({'user': 'user in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// list-users route
app.get('/user/list',function (req, res) {
  User.find(function(err, users){
    if(err){
      console.log(err);
    }
    else {
      res.json(users);
    }
  });
});


// edit page route
app.get('/user/edit/:id',function (req, res) {
  let id = req.params.id;
  User.findById(id, function (err, user){
      res.json(user);
  });
});

// update user route
app.post('/user/update/:id',function (req, res) {
    User.findById(req.params.id, function(err, user) {
    if (!user)
      res.status(404).send("data is not found");
    else {
        user.first_name = req.body.first_name;
        user.last_name = req.body.last_name;

        user.save().then(user => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// delete user route
app.get('/user/delete/:id',function (req, res) {
    User.findByIdAndRemove({_id: req.params.id}, function(err, user){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports= app 