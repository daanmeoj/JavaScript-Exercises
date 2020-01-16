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
    Shape.prototype.duplicate.call(this);
    console.log('duplicate circle');
}

const c=new Circle(1,'red');



