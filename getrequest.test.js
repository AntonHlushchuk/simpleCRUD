// test.js

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./server');

const expect = chai.expect;
chai.use(chaiHttp);

describe('GET /api/data', () => {
    it('should return a 200 status code and a JSON response', (done) => {
        chai
            .request(app)
            .get('/api/data')
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                done();
            });
    });
});
