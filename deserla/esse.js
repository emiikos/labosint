function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.calculateArea = function() {
  return Math.PI * this.radius * this.radius;
};

const myCircle = new Circle(5);
console.log(myCircle.calculateArea()); // Output: 78.53981633974483
