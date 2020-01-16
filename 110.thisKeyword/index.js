// 'use strict';

// const Circle=function() {
//     this.draw=function(){
//         console.log(this);
//     }
// }

// const c=new Circle();
// //method call
// c.draw();

// const draw=c.draw;

// //console.log(draw);
// //function call
// draw();

class Circle{
    draw(){
        console.log(this);
    }
}

const c=new Circle();
const draw=c.draw;
draw();