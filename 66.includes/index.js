const numbers=[1,2,3,4];

console.log(includes(numbers,2));
console.log(includes(numbers,3));
console.log(includes(numbers,5))

function includes(array,searchElement) {
    return array.indexOf(searchElement)!==-1;
}