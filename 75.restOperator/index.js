
function  sum2(discount,...prices) {
    const total= prices.reduce((a,b)=>a+b);
    return total*(1-discount)
}

console.log(sum2(0.1,20,30));
