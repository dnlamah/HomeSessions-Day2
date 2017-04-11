//adding tests use cases for http client
'use strict'

var chai = require('chai');
var assert = chai.assert;

var lib = require('./libs/client.js');

describe("Test that function returns a string", function(){
  //interger Input Type Test Case
  it("should return an object", function(){
    assert(
      //typeof lib.wiki("hello world") == "object"
    );
  });

  it("should return a wiki article", function(){
    assert(
      //lib.wiki("hello world")[0].hasOWnProperty("Title") == true;
    );
  });
  
});