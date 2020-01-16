const _radius=new WeakMap();


class Circle{
    constructor(radius){
        _radius.set(this,radius);
        
    }

    draw(){
        console.log('circle with radius '+_radius.get(this))
    }
}


const c=new Circle(1);
console.log(_radius.get(c));
c.draw();

