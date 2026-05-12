function Rectangle(height, width) {
    this.height = height
    this.width = width
}

Rectangle.prototype.calcArea = function calcArea() {
    return this.height * this.width
}

Rectangle.prototype.area = Rectangle.prototype.calcArea;

const square = new Rectangle(10, 10);

console.log(square.area()) // 100
