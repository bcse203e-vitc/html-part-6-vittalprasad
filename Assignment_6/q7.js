function fibonacci(){
    let number=6;
    let n1=0;
    let n2=1;
    let nextterm;
for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
}
fibonacci();