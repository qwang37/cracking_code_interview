const assert = require('chai').assert;
const Zero = require('../main/Zero');

describe('Zero', () => {  
    [
        {
            matrix:[
                [1,1],
                [1,0]
            ],
            outcome:[
                [1,0],
                [0,0]
            ]
        },
        {
            matrix:[
                [1,1,0],
                [1,0,1],
                [0,1,1]
            ],
            outcome:[
                [0,0,0],
                [0,0,0],
                [0,0,0]
            ]
        },
        {
            matrix:[
                [1,2,3],
                [4,0,6],
                [7,8,9]
            ],
            outcome:[
                [1,0,3],
                [0,0,0],
                [7,0,9]
            ]
        }
    ].forEach(x => {
        it('Zero matrix', () => {
            let result = Zero(x.matrix);
            assert.deepEqual(result, x.outcome);
        })
    });    
})   