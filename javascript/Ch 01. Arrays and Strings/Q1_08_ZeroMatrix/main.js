/*
Zero Matrix
Write an algorithm such that if an element in an M*N matrix is 0,
its entire row and column are set to 0.
*/
var m=[[0,1,1],[1,2,0],[3,1,4]];
function ZeroMatrix(m){
    var newm=new Array();
    for(let i=0;i<=m.length-1;i++){
        newm[i]=new Array();
    }
    for(let i=0;i<=m.length-1;i++){
        for(let j=0;j<=m[0].length-1;j++){
            newm[i][j]=1;
        }
    }
    for(let i=0;i<=m.length-1;i++){
        for(let j=0;j<=m[0].length-1;j++){
            if(m[i][j]===0){
                newm[i]=zeros(m[0].length);
                for(let k=0;k<=m.length-1;k++){
                    newm[k][j]=0;
                }
            }
        }
    }
    for(let i=0;i<=m.length-1;i++){
        for(let j=0;j<=m[0].length-1;j++){
            if(newm[i][j]===1){
                newm[i][j]=m[i][j];
            }
        }
    }
    return newm;
}
function zeros(n){
    var a=new Array();
    for(let i=0;i<=n-1;i++){
        a[i]=0;
    }
    return a;
}
console.log(ZeroMatrix(m));

