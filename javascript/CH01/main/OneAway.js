/* One Away: There are three types of edits that can be performed on strings: 
insert a character, remove a character, or replace a character. Given two strings, 
write a function to check if they are one edit (or zero edits) away.

EXAMPLE
pale, ple -) true pales, pale - ) true pale, bale -) true pale, bae -) false*/

module.exports = function OneAway(str1,str2){
    if(str1 === str2 || Math.abs(str1.length-str2.length) > 1){//字符串相等或是长度悬殊
        return false;
    }
    else {
        if(str1.length === str2.length){//字符串相等的情况
        var dif = 0;
        for(var i = 0; i < str1.length; i++){
            if(str1[i]!==str2[i]){
                str2[i] = str1[i];
                dif++;
                if(dif > 1){
                    return false;
                }
                return true;
                }
            }

        }
        else if(str1.length > str2.length){//字符串不等的情况
            for(var j = 0; j < str1.length; j++){
                if(str1[j]!==str2[j]){

                    return str1 === str2.slice(0,j) + str1[j] + str2.slice(j);
                }
            }
        }
        else if(str2.length > str1.length){//字符串不等的情况
            for(var z = 0; z < str2.length; z++){
                if(str2[z]!==str1[z]){
                    return str2 === str1.slice(0,z) + str2[z] + str1.slice(z);
                }
            }
        }

    }
}
