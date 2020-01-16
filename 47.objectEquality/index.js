

//constructor
function Address(street,city,zipCode){
    this.street=street;
    this.city=city;
    this.zipCode=zipCode;
  }

//factory
  function createAddress(street,city,zipCode){
    return {
        street,
        city,
        zipCode	
    }
  }


  const address1=createAddress(2,'Tolu',1234);
  const address2=createAddress(2,'Tolu',1234);
  const address3=address1;

  function isEqual(address1,address2){
    return(address1.street===address2.street 
      && address1.city===address2.city
      && address1.zipCode===address2.zipCode);
  }

  console.log(isEqual(address1,address2));

  function isSame(address1,address2){
    return address1===address2;
    
  }
  console.log(isSame(address1,address3));