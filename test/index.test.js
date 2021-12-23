const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../src/index");
const assert = chai.assert;
chai.use(chaiHttp);

describe("should be hello", () => {
  it("test GET api hello", (done) => {
    chai
      .request(server)
      .get("/")
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.equal(res.text, "hello");
        done();
      });
  });
});
