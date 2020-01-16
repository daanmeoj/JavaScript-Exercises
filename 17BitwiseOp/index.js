const readPermission=4;
const writePermission=2;
const executePermission=1;
let myPer=0;
myPer=myPer | readPermission | writePermission;

console.log(myPer);

let message=(myPer & readPermission)?'yes':'no';

console.log(message);