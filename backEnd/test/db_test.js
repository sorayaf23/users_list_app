require('dotenv').config()
const mongoose = require('mongoose');
const User = require('./../userModel');

const should = require('chai').should();

process.env.NODE_ENV = 'test';


describe('database tests' , () => {

    let DataUser = {
        first_name : 'soraya',
        last_name : 'farkhonde'
    }


    before(() => {
        mongoose.Promise = global.Promise;
        mongoose.connect(process.env.DB_URL_TEST, { useNewUrlParser : true});    
    })

    it('check connection' , done => {
        mongoose.connection
            .once('open' , () =>console.log("connect successfuly!"))
            .on('error' , (err) => {
                console.log(err);
            });
            done();  
    });


    it('save a user' , async () => {
        
        let user= new User(DataUser);

        user = await user.save();

        user.should.be.a('object');
        user.should.have.property('first_name');
        user.should.have.property('last_name');
    });

    it('find all users' , async () => {
        let user = await User.find({});

        user.should.be.a('array');
        user.length.should.be.deep.eql(1);
    });

    it('find a user' , async () => {
        let user = await User.findOne({ first_name : DataUser.first_name });

        user.first_name.should.be.eql(DataUser.first_name);
        user.last_name.should.be.eql(DataUser.last_name);
  
    });

    it('update a user' , async () => {
        let user = await User.findOne({ first_name : DataUser.first_name });


        user.set({
            'first_name' : 'sry'
        });

        let result = await user.save();

        result.should.be.a('object');
        result.should.have.property('first_name');
        result.first_name.should.be.eql('sry');
    });

    after('close db connection',() => {
        mongoose.connection.close();
    })
})