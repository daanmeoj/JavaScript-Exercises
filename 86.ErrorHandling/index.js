const numbers=[1,2,2,3,4,1,4,4,4,2,2,2,2];

function countOcurrences2(numbers, searchElement) {
    if(Array.isArray(numbers)!==true) throw new Error('value is not a Array');
    const filtered=numbers.filter(n=>n===2);
    return filtered.length;
}


try{
    console.log(countOcurrences2(true,2));
    }
    catch(e){
        alert(e);
    }


