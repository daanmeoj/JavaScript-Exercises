
function Circle(radius) {
    
    this.radius=radius;
    let defaultLocation={x:0, y:0};
    let computeLocation=function(){
        //...
    }
    this.draw=function() {
        computeLocation(0.1);
        console.log('draw');
    }
}

const another=new Circle(1);
another.