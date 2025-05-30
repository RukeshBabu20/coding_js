/*
Hints:

1. given input is sorted. ( array or string )
2. 

*/

const a1 = [1,2,3,4,5];
// const a1 = 'efiqubafoiwbefqobawer'

for(let i=0; i<a1.length; i++){
    for (let j=i+1; j<a1.length; j++){
        console.log(a1[i],'i',a1[j],'j')
       
    }
}

let i = 0;
let j = a1.length-1;

while (i<j){
    console.log(a1[j],a1[i]);
    i++;
    j--;
}