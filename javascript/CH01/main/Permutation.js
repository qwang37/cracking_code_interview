/* Given two strings, write a method to decide if one is a permutation of the other.*/


module.exports = function Permutation(str1,str2){
    return str1.split("").sort().join("") === str2.split("").sort().join("");
}
