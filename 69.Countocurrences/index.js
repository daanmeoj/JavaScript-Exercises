const numbers=[1,2,2,3,4,1,4,4,4,2,2,2,2];

function countOcurrences(numbers, searchElement) {
    //if(Array.isArray(numbers)!==true) throw new Error('value is not a array');
    const filtered=numbers.filter(n=>n===2);
    return filtered.length;
}

console.log(countOcurrences(numbers,2));
