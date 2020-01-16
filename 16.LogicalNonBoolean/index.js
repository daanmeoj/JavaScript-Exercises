    console.log(false || true)
    console.log(false || 'Mosh')
    console.log(false || 1)
    console.log(false || '')
    console.log(false || null)
    console.log(false || 1||2)
    console.log(false || 2||1)


//Falsy
//undefined
//null
//0
//false
//''
//NaN
//Anything that is not falsy->is Truthy
//short circuiting
let userColor=undefined;
let defaultColor='blue';
let currentColor=userColor||defaultColor;
console.log(currentColor);

