
//constructor
function Circle(radius){
  this.radius=radius;
  this.draw=function(){
    console.log('draw');
  }
}

// const Circle1=new Function('radius', `this.radius=radius;
// this.draw=function(){
//   console.log('draw');
// }
// `);

// const another=new Circle(1);
// const circle=new Circle1(1);

Circle.call({},1)//is another way of instanciate
Circle.apply({},[1])//exactly like call


