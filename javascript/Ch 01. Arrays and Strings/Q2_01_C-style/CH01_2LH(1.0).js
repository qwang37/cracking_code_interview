function C_style(str){
    return str.split("").reverse().slice(1).join("") + " ";


}
console.log(C_style("abcd "));
console.log(C_style("abcd ").length);