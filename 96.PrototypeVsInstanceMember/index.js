function Circle(radius) {
    //instance members
    this.radius=radius;

    this.move=function() {
        this.draw();
        console.log('move');
    }

}

const c1=new Circle(1);
const c2=new Circle(1);

//prototypes members
Circle.prototype.draw=function() {
    //this.move();
    console.log('draw');
}

Circle.prototype.toString=function() {
    return 'Circle with radius '+this.radius;
}