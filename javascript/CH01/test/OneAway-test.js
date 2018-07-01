const assert = require('chai').assert;
const OneAway = require('../main/OneAway');

describe('OneAway', () => {        //first method
    it('one more', () => {
        let result = OneAway("sd","asd");
        assert.equal(result, true);
    })
    it('one less', () => {
        let result = OneAway("basd","asd");
        assert.equal(result, true);
    })
    it('one change', () => {
        let result = OneAway("bsd","asd");
        assert.equal(result, true);
    })
    it('change multible time', () => {
        let result = OneAway("abc","abde");
        assert.equal(result, false);
    })
})