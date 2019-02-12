var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();
var fb = require("../fizzbuzz.js");
var vectorFizzBuzz = [];

describe('FizzBuzz', function(){
    
    before(function() {
        vectorFizzBuzz =  fb.fizzbuzz();
    });

    it('Cuando el numero es multiplo de 3, se deberia generar Fizz',function(){
        expect(fb.generarValor(3)).equal("Fizz");
    });

    it('Cuando el numero es multiplo 5, se deberia generar Buzz',function(){
        expect(fb.generarValor(5)).equal("Buzz");
    });

    it('Cuando el numero es multiplo 15, se deberia generar FizzBuzz',function(){
        expect(fb.generarValor(15)).equal("FizzBuzz");
    });

    it('Cuando el numero no es multiplo de 3,5 o 15, se deberia generar el mismo numero',function(){
        expect(fb.generarValor(11)).equal("11");
    });

});