/* One Away: Zero Matrix: Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.*/


module.exports = function Zero(a){
    let arr1 = [];
    let arr2 = [];
    for(var i = 0; i < a.length; i++){
        for(var j = 0; j < a[0].length; j++) {
            if (a[i][j] === 0) {
                arr1.push(i);
                arr2.push(j);
            }
        }
    }
    for(var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < a[0].length; j++) {
            a[ arr1[i]] [j] = 0;
        }
    }
    for(var i = 0; i < arr2.length; i++) {
        for (var j = 0; j < a.length; j++) {
            a[j] [ arr2[i] ] = 0;
        }
    }
    return a;
}




