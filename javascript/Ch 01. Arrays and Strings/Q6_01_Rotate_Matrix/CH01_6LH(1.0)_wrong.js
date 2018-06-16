//Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, 
//write a method to rotate the image by 90 degrees Can you do this in place?

var Matrix = [[1,2,3,4], [5,6,7,8], [9,10,11,12],[13,14,15,16]];
function rotation(matrix){
    var cycle = Math.ceil(matrix.length/2);
    for(var i = 0; i < cycle; i++){
        var last = matrix.length - 1 - i;

        for(var j = i; j < last+1; j++){
            //console.log(j)
            var offset = j - i;
            var top = matrix[i][last-offset];//save top
            var left = matrix[j][i];//save left
            var bottom = matrix[last][j];//save bottom
            var right = matrix[last-offset][last];//save right
            //console.log(top);???I thought the original top,left,right and bottom have been saved. Why it still change by following code? It suppose to be execute first！

            matrix[i][last-offset] = left;//left-->top
            matrix[j][i] = bottom;//bottom-->left
            matrix[last][j] = right;//right-->bottom
            matrix[last-offset][last] = top;//top-->right
        }
    }

    return matrix;
}


console.log(rotation(Matrix))
