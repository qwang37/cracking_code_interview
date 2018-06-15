/*
Check Permutation
Given two strings, write a method to decide if one is a permutation
of the other
*/
var s1='你好qyq';
var s2='qyq你好';
function CheckPermutation(s1,s2){
    var a1=to_Array(s1);
    var a2=to_Array(s2);
    return a1.sort().toString()===a2.sort().toString();
}
function to_Array(s){
    var a=new Array();
    for(var i=0;i<=s.length-1;i++){
        a[i]=s[i];
    }
    return a;
}
console.log(CheckPermutation(s1,s2));
