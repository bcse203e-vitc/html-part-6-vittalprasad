function counts(a){
    let cnt=0;
    while(a>0){
        cnt++;
        a=Math.floor(a/10);

    }
    console.log(cnt);
}
let a=1234;
counts(a);