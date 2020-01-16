const numbers=[4,4,1,2,5,1];
console.log(numbers);

function except(numbers,excluded) {
    numbers.sort(function(a,b){
        if(a<b)return -1;
        if(a>b)return 1;
        return 0;
    });
    console.log(numbers);
    for(let number of excluded){
        numbers.splice(numbers.indexOf(number)
                        ,numbers.lastIndexOf(number)-numbers.indexOf(number)+1);
        
    }   
}





except(numbers,[4,2,5])
console.log(numbers);


