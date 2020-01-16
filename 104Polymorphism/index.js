function extend(Child,Parent) {
    Child.prototype=Object.create(Parent.prototype);
    Child.prototype.constructor=Child;
}

function Shape(color) {
        this.color=color;
}

Shape.prototype.duplicate=function() {
    console.log('duplicate');
}

function Circle(radius, color) {
}

extend(Circle,Shape);


Circle.prototype.duplicate=function() {
    //Shape.prototype.duplicate.call(this);
    console.log('duplicate circle');
}

function Square(params) {
    
}

extend(Square,Shape);

Square.prototype.duplicate=function() {
    //Shape.prototype.duplicate.call(this);
    console.log('duplicate square');
}

const shapes=[
    new Circle(),
    new Square()
];

for(let shape of shapes){
    shape.duplicate();
}



