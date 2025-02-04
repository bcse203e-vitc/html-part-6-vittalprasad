
function evenorodd(arr){
    let arreven=[];
    let arrodd=[];
    let j=0;
    let k=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            arreven[j]=arr[i];
            j++;
        }
        else{
            arrodd[k]=arr[i];
            k++;
        }
    }
    console.log("even numbers:");
    for(let i=0;i<arreven.length;i++){
        console.log(arreven[i]);
    }
    console.log("odd numbers:");
    for(let i=0;i<arrodd.length;i++){
        console.log(arrodd[i]);
    }

}
let arr=[2,3,4,5,6,7,8];
evenorodd(arr);

