// Your code here

class Polygon {
    constructor(sides) {
        this.sides = sides
    }
    get countSides() {
        return this.sides.length
    }
    get perimeter() {
        return this.sides.reduce((countSides, side) => countSides + side, 0)
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (
            this.sides[0] + this.sides[1] <= this.sides[2] ||
            this.sides[0] + this.sides[2] <= this.sides[1] ||
            this.sides[1] + this.sides[2] <= this.sides[0]
        )
            return false;
        else return true;
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.countSides !== 4) return false;
        let sideLength = this.sides[0];
        for (const side of this.sides) {
            if (side !== sideLength) return false;
        }
        return true;
    }
    get area() {
        return this.sides[0] * this.sides[0]
    }
}