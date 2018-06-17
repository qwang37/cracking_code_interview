//Implement an algorithm to determine if a string has all unique characters What if you can not use additional data structures?
function Unique(str){
    var Arr = str.split("");
    var newArr = [];
    for(var i = 0; i < str.length; i++){
        if(newArr.indexOf(Arr[i])===-1){
            newArr.push(Arr[i]);
        }
    }
    return newArr.join("");

}
console.log(Unique("happy"));
