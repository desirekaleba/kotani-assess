const expect = require("chai").expect;
const app = require("../index");
const request = require("supertest");


const userCredentials = {
  email: "sponge@bob.com",
  password: "garyTheSnail",
};
// now let's login the user before we run any tests
const authenticatedUser = request.agent(app);
// eslint-disable-next-line no-undef
before(function(done) {
  authenticatedUser
      .post("/api/login")
      .send(userCredentials)
      .end(function(err, response) {
        expect(response.statusCode).to.equal(200);
        done();
      });
});

