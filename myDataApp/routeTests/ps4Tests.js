const app = require('../app')
const chai = require('chai');
const mocha = require('mocha');
const chaiHttp = require('chai-http'); //has a dependency on mocha
const {expect} = chai;
const {describe} = mocha;

chai.use(chaiHttp);

describe('coronavirus API', () => {
    it('the initial index page should return 200 status', function (done) {
        chai.request(app)
            .get('/')
            .end((err, response) => {
                expect(response).to.have.status(200);
                done();
            })
    });

    it('the api page should return 200 status', function (done) {
        let country = {
            country:"US"
        }
        chai.request(app)
            .post('/ps4')
            .send(country)
            .end((err, response) => {
                expect(response).to.have.status(200);
                done();
            })
    });

    it('the api page post should contain the output text', function (done) {
        let country = {
            country:"US"
        }
        chai.request(app)
            .post('/ps4')
            .send(country)
            .end((err, response) => {
                expect(response.text)
                done();
            })
    });
})