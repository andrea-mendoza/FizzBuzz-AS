var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();
var fb = require("../fizzbuzz.js");


describe('lo que quiero', function(){
    it('deberia pasar',function(){
        result = fb.imprimir(6);
        expect(result).equal(6);
    });
});