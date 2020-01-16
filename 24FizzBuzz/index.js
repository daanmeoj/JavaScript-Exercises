function fizzBuzz(number){
    if(typeof number!=='number') return NaN;
    else if((number%3===0) && (number%5===0)) return 'FizzBuzz';
    else if(number%3===0) return 'Fizz';
    else if(number%5===0) return 'Buzz';
    return number;
}


console.log(fizzBuzz(false));