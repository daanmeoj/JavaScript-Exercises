const numbers=[100,1000,2,3,4000];

function getMax(numbers) {
    return numbers.reduce((maximunValue,current)=>(current>maximunValue)?current:maximunValue);
}

let max=getMax(numbers);
console.log(max);