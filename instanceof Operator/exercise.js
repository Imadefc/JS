class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  static calculate(obj){
    if(obj instanceof Circle){
      return (Math.PI*Math.pow(obj.radius, 2));
    }else if(obj instanceof Square){
      return (Math.pow(obj.side,2));
    }else if(obj instanceof Rectangle){
      return (obj.height * obj.width);
    }else{
      return"Error";
    }

  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));