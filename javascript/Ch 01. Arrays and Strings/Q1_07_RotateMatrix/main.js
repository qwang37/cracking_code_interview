/*
Rotate Matrix
Given an image represented by an N*N matrix, where each pixel in 
the image is 4 bytes, write a method to rotate the image by 90 
degrees. Can you do this in place?
*/
var img=[[1,2],[3,4]];
var newimg=new Array();
for(var i=0;i<=img[0].length-1;i++){
    newimg[i]=new Array();
}
function rotate90(img,newimg){
    for(var i=0;i<=img.length-1;i++){
        for(var j=0;j<=img[0].length-1;j++){
            newimg[img[0].length-1-j][i]=img[i][j];
        }
    }
    return newimg;
}
console.log(rotate90(img,newimg));
