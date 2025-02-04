let a= 6;
let b= 8;
let c= 3;
larger(a,b,c);

function larger(a,b,c){
if(a>b && a>c){
    console.log(a,"is largest among three");
}
else if(b>a && b>c){
    console.log(b,"is largest among three");
}
else{
    console.log(c,"is largest among three");
}
}