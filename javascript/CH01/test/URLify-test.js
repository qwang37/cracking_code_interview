const assert = require('chai').assert;
const URLify = require('../main/URLify');

describe('All the space should be replaced by %20', () => {  
    [
        "it is interesting",
        "it  is interesting",
        "  "
        
    ].forEach(arg=>{
        it('if string has being replaced by %20', () => {
            let result = URLify(arg);
            assert.equal(result,arg.replace(/ /gi,"%20"));
        })
    })     
})