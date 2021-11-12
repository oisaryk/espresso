const assert = require('chai').assert;
const chai = require('chai');
const expect = require('chai').expect;
const request = require('request');

require('dotenv').config()

const mongoose = require('mongoose');
//tell mongoose to use es6 implementation of promises
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_URL); 
mongoose.connection
    .once('open', () => console.log('Connected!'))
    .on('error', (error) => {
        console.warn('Error : ',error);
    });
//Called hooks which runs before something.
beforeEach((done) => {
    mongoose.connection.collections.apps.drop(() => {
         //this function runs after the drop is completed
        done(); //go ahead everything is done now.
    }); 
});

after(() => {
    mongoose.connection.close();
})

const App = require('../models/app.model');

const URL = 'http://localhost:3000';

describe('Database tests', () => {
    const url = URL + '/records';

    describe('Create test', () => {
        it('Creates new document with data', (done) => {
            const appData = new App({ time: new Date('1/1/2021'), method: 'GET' });
            appData.save().then((res) => {
                assert(!appData.isNew);
            }).finally(() => done());;
        });
    });

    describe('Get test', () => {
        beforeEach(() => {
            const appData = new App({ time: new Date('1/1/2021'), method: 'GET', name: 'Sasha' });
            appData.save().then(() => done());
        });

        it ('Should get all database fields', (done) => {
            App.findOne({ name: 'Sasha' }).then((data) => {
                expect(data.name).to.be.equal('Sasha');
            }).finally(() => done());
        })
    })




});
