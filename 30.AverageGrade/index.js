const grades=[80,100,60,100,100,100,8];


function calculateGrade(grades){
    
  avg=calculateAverage(grades)
  if(avg<60) return 'F';
  else if (avg<70) return 'D';
  else if (avg<80) return 'C';
  else if (avg<90) return 'B';
  return 'A';
   
}

function calculateAverage(array){
    let sum=0;
    for(let value of array)
      sum+=value;

  return sum/array.length;
}


console.log(calculateGrade(grades));