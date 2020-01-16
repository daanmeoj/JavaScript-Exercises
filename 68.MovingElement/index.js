const numbers=[1,2,3,4];





function move(numbers,index,offset) {
if((index+offset)>(numbers.length-1) ||(index+offset)<0)
    console.error('Invalid offset')
else{
if(offset>0){
    for(i=index;i<offset;i++){
        temp=numbers[i+1];
        numbers[i+1]=numbers[i];
        numbers[i]=temp;
        }
    }
else{
    for(i=index;i>(index+offset);i--){
        temp=numbers[i-1];
        numbers[i-1]=numbers[i];
        numbers[i]=temp;
        }
    }
}
}


console.log(numbers);
move(numbers,1,1);
console.log(numbers);



