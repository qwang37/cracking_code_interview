/*
String Compression
Implement a method to perform basic string compression using the 
counts of the repeated characters. For example, the string aabccccaaa
would become a2b1c5a3. If the "compressed" string would not become 
smaller than the original string, your method should return the 
original string. You can assume the string has only uppercase and 
lowercase letters(a-z).
*/ 
var s='abaaaaccddd';
function to_Array(s){
    var a=new Array();
    for(i=0;i<=s.length-1;i++){
        a[i]=s[i];
    }
    return a;
}
function compress_str(s){
    var a=to_Array(s);
    var count=1;
    var flag=a[0];
    var newstr='';
    for(var i=1;i<=a.length-1;i++){
        if(a[i]===flag){
            count++;
        }else{
            newstr=newstr+flag;
            newstr=newstr+count;
            count=1;
            flag=a[i];
        }
        if(i===a.length-1){
            newstr=newstr+flag;
            newstr=newstr+count;
        }
    }
    return newstr;
}
console.log(compress_str(s))