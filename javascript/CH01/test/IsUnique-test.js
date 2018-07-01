const assert = require('chai').assert;
const Unique = require('../main/IsUnique');
const unique = require('../main/IsUnique');
describe('IsUnique', () => {        //first method
    it('has no duplicate', () => {
        let result = unique("hapy");
        assert.equal(result, true);
    })
    it('has duplicate', () => {
        let result = unique("happy");
        assert.equal(result, false);
    })
})

describe('IsUnique', () => {        //second method
    it('has no duplicate', () => {
        let result = Unique("hapy");
        assert.equal(result, true);
    })
    it('has duplicate', () => {
        let result = Unique("happy");
        assert.equal(result, false);
    })
})


