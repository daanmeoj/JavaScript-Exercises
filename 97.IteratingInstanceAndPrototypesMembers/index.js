function Circle(radius) {
    //instance members
    this.radius=radius;

    this.move=function() {
        console.log('move');
    }

}

const c1=new Circle(1);

//prototypes members
Circle.prototype.draw=function() {
    //this.move();
    console.log('draw');
}

c1.draw();

console.log(Object.keys(c1));

for(let key in c1) console.log(key);



