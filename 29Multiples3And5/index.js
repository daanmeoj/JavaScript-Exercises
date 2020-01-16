function sum(limit){
  counter=0;
    for(let i=0;i<=limit;i++)
       if(i%3===0 || i%5===0)
         counter+=i;
  return counter;
}


console.log(sum(10));