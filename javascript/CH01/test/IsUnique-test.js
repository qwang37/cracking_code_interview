const assert = require('chai').assert;
const Unique = require('../IsUnique');
describe('IsUnique', () => {
    it('has no duplicate', () => {
        let result = Unique("hapy");
        assert.equal(result, true);
    })
})
describe('IsUnique', () => {
    it('has duplicate', () => {
        let result = Unique("happy");
        assert.equal(result, false);
    })
})
