function rever(a){
    let z=a;
    let x=0;
    while(z!=0){
        let b=z%10;
        x=(x*10) + b;
        z=Math.floor(z/10);

    }
    console.log(x);
}
let a=354;
rever(a);