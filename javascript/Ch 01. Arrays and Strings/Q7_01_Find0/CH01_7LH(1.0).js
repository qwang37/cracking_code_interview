var input=[1,2,3,4,0,6,7,8,9];
var matrix = [];
for(var i=0; i<3; i++) {
    matrix[i] = [];
    for(var j=0; j<3; j++) {
        matrix[i][j] = input[i*3+j];
    }
}

var arr1 = [];
var arr2 = [];
/*
arr.push(1);
console.log(arr|arr.push(1));
*/

function M_0(a){
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


console.log(M_0(matrix));

