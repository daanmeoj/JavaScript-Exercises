//Function Declaration
function walk() {
    console.log('walk');
}

//Anonymous function expression
let run=function(){
    console.log('run');
};

//named function expression
let runn=function walk(){
    console.log('runn');
};

run();
let move=run;
move();