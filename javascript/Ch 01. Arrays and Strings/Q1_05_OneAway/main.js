/*
One Away
There are three types of edits that can be performed on strings: 
insert a character, remove a character, or replace a character. Given 
two strings, write a function to check if they are one edit(or zero
 edits) away.
*/ 
var s1='bob';
var s2='blobs';
function to_Array(s){
    var a=new Array();
    for(var i=0;i<=s.length-1;i++){
        a[i]=s[i];
    }
    return a;
}
function CheckOneAway(s1,s2){
    var a1=to_Array(s1);
    var a2=to_Array(s2);
    for(var i=0;i<=a1.length-1;i++){
        for(var j=0;j<=a2.length-1;j++){
            if(a1[i]===a2[j]){
                a1.splice(i,1);
                a2.splice(j,1);
                i--;continue;
            }
        }
    }
    if(a1.length>1 || a2.length>1){
        return false;
    } 
    return true;
}
console.log(CheckOneAway(s1,s2));