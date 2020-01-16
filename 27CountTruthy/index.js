const array=[ 1 , 2 , false,'',NaN, undefined,3,4,45,5,0,null];

function countTruthy(array){
    let counter=0;
    for(let item of array){
        if(item) counter++;
    }
    return counter;
}

console.log(countTruthy(array));
