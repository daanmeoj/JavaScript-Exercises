class Circle{
    constructor(radius){
        this.radius=radius;
        this.move=function() {
            
        }
    }

    draw(){
        console.log('draw');
    }

    static parse(str){
        const radius=JSON.parse(str).radius;
        return new Circle(radius);
    }
}

const circle=Circle.parse('{"radius":1}');