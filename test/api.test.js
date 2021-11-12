const assert = require('chai').assert;
const chai = require('chai');
const expect = require('chai').expect;
const request = require('request');

const URL = 'http://localhost:3000';

describe('API tests', () => {
    describe('Wrong route', () => {
        const url = URL + '/egqwe';

        it('Should return 404', () => {
            request(url, (err, response, body) => {
                assert.equal(response.statusCode, 404);
            });
        })
    });

    describe('/demo route', (done) => {
        const url = URL + '/demo';

        it ('Should return status code 200', () => {
            request(url, (err, response, body) => {
                assert.equal(response.statusCode, 200);
            });
        });

        it ('Should return hello message', () => {
            request(url, (err, response, body) => {
                assert.equal(body, '{"message":"Hello"}');
            });
        });
    });

    describe('/api route', () => {
        const url = URL + '/api';
        it ('Should save current user info', (done) => {
            request(url, (err, response, body) => {
                const result = JSON.parse(body);
                expect(result).have.property("message").to.be.equal("Information has been updated");
                expect(result).have.property("error").not.to.be.equal(true);
                done();
            });
        });

        it ('Should get all data from the database', (done) => {
            request(url + '/records', (err, response, body) => {
                const result = JSON.parse(body).results;
                expect(result.data).to.be.an('array');
                // expect(result.data).to.be.an('array').not.empty;
                done();
            });
        });
    })
});
