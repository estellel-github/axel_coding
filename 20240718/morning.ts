
class MathOperation {
  add(a: number, b?: number): number;
  add(a: string, b?: string): string; // overloading function add with new parametres
  add(a: boolean): boolean;
  //implemintation:
  add(a: any, b?: any): any {
    if (b) {
      return a + b;
    }
    return a;
  }
}

const mathObj = new MathOperation();
console.log(mathObj.add("hello", "world"));
console.log(mathObj.add(1, 2));
//same function, diffrent behavior (implemntation) => polimorphism


interface Shape {
  draw(): void;
}

class Circle implements Shape {
  draw(): void {
    console.log('Drawing a circle...');
  }
}

class Square implements Shape {
  draw(): void {
    console.log('Drawing a square...');
  }
}

function drawShapes(shapes: Shape[]): string {
  shapes.forEach(shape => shape.draw());
  return "Drawing complete";
}

const shapes: Shape[] = [new Circle(), new Square()];

console.log(drawShapes(shapes));