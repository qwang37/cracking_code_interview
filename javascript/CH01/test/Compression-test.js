const assert = require('chai').assert;
const Compression = require('../main/Compression');

describe('Compression', () => {
    [
        {
            arg: "aaa", out: "a3",
            arg: "bbbbbb", out: "b6",
            arg: "aaaabbccc", out: "a4b2c3",
            arg: "abbbccc", out: "a1b3c3"
            
        }
    ].forEach(x =>{
        it('Compression outcome', () => {
            let result = Compression(x.arg);
            assert.equal(result,x.out);  
         }) 
    })
})

describe('Compression', () => {
    [
        {
            arg: "a", out: "a",
            arg: "bb", out: "bb",
            arg: "aaabc", out: "aaabc",
            arg: "aabbcc", out: "aabbcc"
            
        }
    ].forEach(x =>{
        it('original outcome', () => {
            let result = Compression(x.arg);
            assert.equal(result,x.out);  
         }) 
    })
})