const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
chai.use(chaiHttp);

const server = require('../app');

describe('Node.JS Server Test', () => {
  it('Anasayfa 200 http koduyla response dönmelidir.', (done) => {
    chai
      .request(server)
      .get('/')
      .end((error, res) => {
        res.should.have.status(400);
        done();
      });
  });
});
