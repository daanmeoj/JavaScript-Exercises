function arrayFromRange(min,max) {
    let array1=[];
    for(let i=min;i<=max;i++)
        array1.push(i);
    return array1;
}

const array2=arrayFromRange(4,-10);

console.log(array2);