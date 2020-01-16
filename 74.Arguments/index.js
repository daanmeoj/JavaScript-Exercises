function  sum(a,b) {
    //console.log(arguments);
    return a+b;
}

//console.log(sum(1,2,3,4,5));
// console.log(sum(1,2));
// console.log(sum(1));
// console.log(sum());

function  sum2() {
    let total=0;
    for(let value of arguments)
        total+=value;
    return total;
}

console.log(sum2(1,2,3,4,5,10,11));
