/**
 * Created by krzysztofkicinger on 28/08/2017.
 */
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../main/app';

chai.use(chaiHttp);

describe('GET /', () => {

    it('Should respond with 200 and some content', done => {
        chai.request(app)
            .get('/')
            .end((error, response) => {
                expect(response).not.to.be.null;
                expect(response).to.have.status(200);
                done();
            });
    });

});

describe('GET /nonexistingpath', () => {

    it('Should return status 404 and message "Page Not Found"', (done) => {
        chai.request(app)
            .get('/nonexistingpath')
            .end((error, response) => {
                expect(response).to.have.status(404);
                expect(response).to.be.json;
                expect(response.body).to.have.property('error', 'Page Not Found');
                done();
            });
    });

});