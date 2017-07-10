var expect = require("chai").expect;
var challenge = require("./challenge.js");

describe("linkTo", function() {
  it("should be defined", function() {
    expect(challenge.linkTo).to.exist;
  });

  it("should return a valid link for Simplon", function() {
    expect(challenge.linkTo("Simplon", "http://www.simplon.co")).to.eql("<a href='http://www.simplon.co'>Simplon</a>");
  });
});
