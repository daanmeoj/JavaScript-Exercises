
function  sum(...prices) {
    //console.log(typeof prices);
    if(prices.length===1 && Array.isArray(prices[0]))
        prices=[...prices[0]]
    return total= prices.reduce((a,b)=>a+b);
    

}

console.log(sum(20,30,50));
//console.log(sum(20,30,50));