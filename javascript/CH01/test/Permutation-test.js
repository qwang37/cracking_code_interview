const assert = require('chai').assert;
const Permutation = require('../main/Permutation');

describe('Permutation', () => {  
    [
        "acb",
        "bac",
        "cba"
    ].forEach(arg => {
        it('The permutation should be true', () => {
            let result = Permutation("abc",arg);
            assert.equal(result, true);
        })
    }); 
    [
        "abcd",
        "abe",
        "vs"
    ].forEach(arg => {
        it('The permutation should be false', () => {
            let result = Permutation("abc",arg);
            assert.equal(result, false);
        })
    })
})   

  
    


