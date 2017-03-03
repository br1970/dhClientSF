"use strict";
let chai = require('chai');
let chaiHttp = require('chai-http');
var server = require('../dhclient');

let should = chai.should();

chai.use(chaiHttp);

describe('/GET echo', () => {
    it('it should GET an echo', (done) => {
        if (process.env.CLUSTER_URI)
            server = ("http://" + process.env.CLUSTER_URI + ":" + server.port).replace(/\n/, '');
        console.log("server is: " + server);
        chai.request(server)
            .get('/echo')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('RC').and.equal(0);
                res.body.should.have.property('success').that.is.an('array');
                res.header.should.have.property('content-length').above(0);
                done();
            });
    });
});
