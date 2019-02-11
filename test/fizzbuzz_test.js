var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();
var fb = require("../fizzbuzz.js");


describe('FizzBuzz', function(){

    it('Cuando el numero es 1 deberia devolver 1',function(){
        expect(fb.fizzbuzz()[1]).equal("1");
    });

    it('Cuando el numero es 3 deberia devolver Fizz',function(){
        expect(fb.fizzbuzz()[3]).equal("Fizz");
    });
});