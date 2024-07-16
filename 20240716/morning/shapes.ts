
// Base class representing a Shape
class Shape {
  protected color: string;
  constructor(color: string) {
    this.color = color;
  }
  draw() {
    console.log(`Drawing a ${this.color} shape...`);
  }
}

// Derived class representing a Circle
class Circle extends Shape {
  private radius: number;

  constructor(color: string, radius: number) {
    super(color);
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius ** 2;
  }
}


// Derived class representing a Rectangle (sibling of Circle)
class Rectangle extends Shape {
  protected width: number; protected height: number;

  constructor(color: string, width: number, height: number) {
    super(color);
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }
}
