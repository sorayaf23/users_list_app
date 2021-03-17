process.env.NODE_ENV = 'test';

let mongoose = require('mongoose');
let User = require('./../userModel');

let chai = require('chai');
let should = chai.should();
let chaiHttp = require('chai-http');
let app = require('./../server');

chai.use(chaiHttp);

describe('user Routes' , () => {

    let DataUser = {
        first_name : 'soraya',
        last_name : 'farkhonde'
    }

    describe('/GET ---> get list users' , () => {
        it('it should GET all the users' , done => {
            chai.request(app)
                .get('/user/list')
                .end((err , res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');

                    done();
                })
        })
    })


    // describe('/update/:id --> edit user' , () => {
    //     it('it should UPDATE a user given the id' , done => {
    //         let user = new User(DataUser);
    //         user.save((err , user) => {
    //             chai.request(app)
    //                 .post('/user/update/:id')
    //                 .send({ first_name : 'sry' , last_name : 'frkhd'})
    //                 .end((err , res) => {
    //                     res.should.have.status(200);
    //                     res.body.should.be.a('object');
    //                     res.body.result.should.have.property('first_name').eql('sry');

    //                     done();
    //                 })
    //         })
    //     })
    // })

    describe('/delete/:id user' , () => {
        it('it should DELETE a user given the id' , done => {
            let user = new User(DataUser);
            user.save((err , user) => {
                chai.request(app)
                    .get('/user/delete/:id' + user.id)
                    .send({ first_name: 'sry' , last_name : 'frkhd'})
                    .end((err , res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        done();
                    })
            })
        })
    })


    after(async () => {
        await User.deleteMany({});
    })
});