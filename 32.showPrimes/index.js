function showPrimes(limit){
  for(let i=2;i<=limit;i++){
  let isPrime1=isPrime(i);
  if(isPrime1)console.log(i);
  }
}

function isPrime(i){
  for(let j=2;j<i;j++){
    if(i%j===0){
      return false;
    }
    }
  return true;
}

showPrimes(10);

