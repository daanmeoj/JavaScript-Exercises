let person={name: 'Mosh'}

// for(let key in person)
//     console.log(key);

//     console.log(Object.keys(person));

//     let objectBase=Object.getPrototypeOf(person);

//     let descriptor=Object.getOwnPropertyDescriptor(objectBase,'toString');
//     console.log(descriptor);


Object.defineProperty(person,'name',{
    writable: false,
    enumerable:true,
    configurable:false
})

person.name='David';
delete person.name;

console.log(person.name);

console.log(Object.keys(person));