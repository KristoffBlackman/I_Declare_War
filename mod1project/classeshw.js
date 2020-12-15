


class Circle {
    constructor(a, b) {
      this.radius = a;
      this.diameter = b;
      this.sides = 0;
    }
    circle_area() {
      return  Math.pow(this.radius,2) * 3.14;
    }

    total_sides() { 
        return this.sides;
    }
  }
  
// start of class Square

class Square extends Rectangle{

    constructor(a,b){
        super(a,b);
      
     }
   
    }
class Rectangle extends Circle{

 constructor(a,b){
super(a,b);
this.sides +=4;
this.width = this.diameter;
this.height =this.radius;
delete this.radius;
}

area(){
  return this.height * this.width;
}
 
}

// start of class Square


    
console.log(squr.circle_area());
const squr = new Circle(3,7);
const square = new Rectangle(10, 10);
console.log(square.sides); 
console.log(squr.circle_area());
const square = new Rectangle(10, 10);
console.log(square.sides); 
const squr = new Circle(3,7);