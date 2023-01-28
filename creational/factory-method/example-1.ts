interface Shape {
  draw(): void;
}

class Circle implements Shape {
  draw() {
    console.log("Drawing a Circle");
  }
}

class Square implements Shape {
  draw() {
    console.log("Drawing a Square");
  }
}

class ShapeFactory {
  static getShape(shapeType: string): Shape {
    if (shapeType === "circle") {
      return new Circle();
    } else if (shapeType === "square") {
      return new Square();
    } else {
      throw new Error("Invalid shape type");
    }
  }
}

const shapeType = "square";
const shape = ShapeFactory.getShape(shapeType);
shape.draw();