const numbers=[3,4];
console.log(numbers);
//end
numbers.push(5,6);
console.log(numbers);
//begining
numbers.unshift(1,2);
console.log(numbers);

//middle
numbers.splice(2,0,'a','b');
console.log(numbers);