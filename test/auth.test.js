const expect = require("chai").expect;
const api = require("../index");
const request = require("supertest");


const userCredentials = {
  email: "sponge@bob.com",
  password: "garyTheSnail",
};

const authenticatedUser = request.agent(api);

// eslint-disable-next-line no-undef
it("should singup the user", function(done) {
  authenticatedUser
      .post("/api/kyc/user/create")
      .send(userCredentials)
      .end(function(err, response) {
        expect(response.statusCode).to.equal(201);
        done();
      });
});

// eslint-disable-next-line no-undef
it("should login the user", function(done) {
  authenticatedUser
      .post("/api/login")
      .send(userCredentials)
      .end(function(err, response) {
        expect(response.statusCode).to.equal(200);
        done();
      });
});


