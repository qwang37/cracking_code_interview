const assert = require('chai').assert;
const IsSubstring = require('../main/StrRotation');

describe('', () => {       
    it('is rotationable', () => {
        let result = IsSubstring("tabacofree","freetabaco");
        assert.equal(result, true);
    })
    it('unrotationable', () => {
        let result = IsSubstring("tabacofree","freetaboco");
        assert.equal(result, false);
    })
})