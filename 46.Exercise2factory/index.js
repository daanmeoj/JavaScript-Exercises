

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
  const address2=new Address(3,'Sincelejo',4569);
  