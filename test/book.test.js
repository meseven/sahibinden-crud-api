const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
chai.use(chaiHttp);

const server = require('../app');

let bookId = '';
describe('/books endpoint testleri', () => {
  it('[POST] bu enpoint yeni bir kitap eklemelidir.', (done) => {
    const book = {
      title: 'Test Title',
      description: 'Test Description',
      year: 1970,
    };

    chai
      .request(server)
      .post('/books')
      .send(book)
      .end((error, res) => {
        res.should.have.status(200);

        res.body.should.be.a('object');
        res.body.should.have.property('title');
        res.body.should.have.property('description');
        res.body.should.have.property('year');

        bookId = res.body._id;

        done();
      });
  });

  it('[GET] bu enpoint eklenen bir kitabı getirmelidir.', (done) => {
    chai
      .request(server)
      .get(`/books/${bookId}`)
      .end((error, res) => {
        res.should.have.status(200);

        res.body.should.be.a('object');
        res.body.should.have.property('title');
        res.body.should.have.property('description');
        res.body.should.have.property('year');

        done();
      });
  });

  it('[GET] bu enpoint tüm kitapları getirmelidir.', (done) => {
    chai
      .request(server)
      .get(`/books`)
      .end((error, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      });
  });

  it('[PUT] bu enpoint var olan bir kitabı güncellemelidir.', (done) => {
    const book = {
      title: 'Updated Title',
      description: 'Updated Description',
      year: 2021,
    };

    chai
      .request(server)
      .put(`/books/${bookId}`)
      .send(book)
      .end((error, res) => {
        res.should.have.status(200);

        res.body.should.be.a('object');
        res.body.should.have.property('title');
        res.body.should.have.property('description');
        res.body.should.have.property('year');

        done();
      });
  });

  it('[DELETE] bu enpoint var olan bir kitabı silmelidir.', (done) => {
    chai
      .request(server)
      .delete(`/books/${bookId}`)
      .end((error, res) => {
        res.should.have.status(200);

        res.body.should.be.a('object');
        res.body.should.have.property('title');
        res.body.should.have.property('description');
        res.body.should.have.property('year');

        done();
      });
  });
});
