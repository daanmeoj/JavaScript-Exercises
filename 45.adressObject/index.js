let obj={
    street: 2,
    city: 'Tolu',
    zipCode:1234
};


function showAddress(address){
    for(let key in address){
        console.log(key,address[key])
    }
  }
  
showAddress(obj);