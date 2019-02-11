var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();
var fb = require("../fizzbuzz.js");
var vectorFizzBuzz = [];

describe('FizzBuzz', function(){

    before(function() {
        vectorFizzBuzz =  fb.fizzbuzz();
    });
    
    it('Cuando el numero es 1 deberia devolver 1',function(){
        expect(vectorFizzBuzz[1]).equal("1");
    });

    it('Cuando el numero es 3 deberia devolver Fizz',function(){
        expect(vectorFizzBuzz[3]).equal("Fizz");
    });

    it('Cuando el numero es 5 deberia devolver Buzz',function(){
        expect(vectorFizzBuzz[5]).equal("Buzz");
    });

    it('Cuando el numero es 15 deberia devolver FizzBuzz',function(){
        expect(vectorFizzBuzz[15]).equal("FizzBuzz");
    });
});