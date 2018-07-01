/*
Is Unique
Implement an algorithm to determine if a string has all unique 
characters. What if you cannot use additional data structures?
*/
//assume all characters means all characters in ascii
var asc2table=new Array(256);
for(var i=0;i<=asc2table.length-1;i++){asc2table[i] = 0;}
var str='hello';
function IsUnique(str){
    for(var i=0;i<=str.length-1;i++){
        asc2table[str.charCodeAt()]=1;
    }
    for(var i=0;i<=asc2table.length-1;i++){
        if(asc2table[i]===0){
            return false;
        }
    }
    return true;
}
console.log(IsUnique(str));