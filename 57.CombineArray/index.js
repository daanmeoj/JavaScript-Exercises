// let first=[1,2,3]
// const second=[4, 5, 6]

// const combined=first.concat(second);

// console.log(combined);

// const slice=combined.slice(2,4);
// const slice2=combined.slice(2);
// console.log(slice);
// console.log(slice2);

let first=[{id:1}]
const second=[4, 5, 6];
const combined=first.concat(second);
first[0].id=10;
console.log(combined);