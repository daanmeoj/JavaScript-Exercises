const person={
    firstName:'Mosh',
    lastName: 'Hamedani',
    get fullName(){
        return `${person.firstName} ${person.lastName}`;
    },
    set fullName(value){
        if(typeof value!=='string') throw new Error('value is not a string');
        let parts=value.split(' ');
        if(parts.length!==2)throw new Error('Enter a First and Last name');
        this.firstName=parts[0];
        this.lastName=parts[1];
    }
};

try{
person.fullName='';
}
catch(e){
    alert(e);
}
console.log(person);