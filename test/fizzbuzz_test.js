var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();
var fb = require("../fizzbuzz.js");
 var FizzBuzz = [];

describe('FizzBuzz', function(){
    
    before(function() {
        FizzBuzz =  fb.generarCadenaFizzBuzz();
    });

    it('Cuando un numero es multiplo de 3, se deberia generar Fizz',function(){
        expect(fb.generarFizzBuzzDe(3)).equal("Fizz");
    });

    it('Cuando un numero es multiplo 5, se deberia generar Buzz',function(){
        expect(fb.generarFizzBuzzDe(5)).equal("Buzz");
    });

    it('Cuando un numero es multiplo 15, se deberia generar FizzBuzz',function(){
        expect(fb.generarFizzBuzzDe(15)).equal("FizzBuzz");
    });

    it('Cuando un numero no es multiplo de 3,5 o 15, se deberia generar el mismo numero',function(){
        expect(fb.generarFizzBuzzDe(11)).equal("11");
    });

    it('El primer valor del vector FizzBuzz deberia ser "FizzBuzz" ',function(){
        expect(FizzBuzz[0]).equal("FizzBuzz");
    });

    it('El tercer valor del vector FizzBuzz deberia ser "2" ',function(){
        expect(FizzBuzz[2]).equal("2"); 
    });

    it('El ultimo valor del vector FizzBuzz deberia ser "Fizz" ',function(){
        expect(FizzBuzz[99]).equal("Fizz"); 
    });

    it('El valor 50 del vector FizzBuzz deberia ser "Buzz" ',function(){
        expect(FizzBuzz[50]).equal("Buzz"); 
    });
});