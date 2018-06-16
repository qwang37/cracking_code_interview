//Write code to reverse a C-Style String (C-String means that “abcd” is represented as five characters, 
//including the null character )
function C_style(str){
    return str.split("").reverse().slice(1).join("") + " ";


}
console.log(C_style("abcd "));
console.log(C_style("abcd ").length);
