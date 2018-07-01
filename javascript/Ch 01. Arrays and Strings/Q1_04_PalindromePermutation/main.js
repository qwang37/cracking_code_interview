/*
Palindrome Permutation
Given a string, write a function to check if it is a permutation of a
palindrome. Apalindrome is a word or phrase that is the same forwards
and backwards. A permutation is a rearrangement of letters. The 
palindrome does not need to be limited to just dictionary words.
EXAMPLE
Input: Tact Coa
Output: True ("taco cat", "atco cta", etc.)
*/ 
var s='Was it a cat I saw';
function PaPe(s){
    s=s.toLowerCase();
    s=s.replace(/ /g,'');
    var a=to_Array(s);
    a=a.sort();
    var num_of_number_odd=0;
    for(var i=0;i<=a.length-1;i++){
        if(i===0){
            var utfcode=a[i];
            var number_odd=1;
            continue;
        }
        if(a[i]===utfcode){
            number_odd=1-number_odd;
        }else{
            if(number_odd===1){
                num_of_number_odd++;
            }
            utfcode=a[i];
            number_odd=1;
        }
        if(i===a.length-1){
            if(number_odd===1){
                num_of_number_odd++;
            }
        }
    }
    if(num_of_number_odd>1){
        return false;
    }
    return true;
}
function to_Array(s){
    var a=new Array();
    for(i=0;i<=s.length-1;i++){
        a[i]=s[i];
    }
    return a;
}
console.log(PaPe(s));