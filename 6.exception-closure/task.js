let parseCount = function(goodsQuanttiyStr) {
    let parse = Number.parseFloat(goodsQuanttiyStr);
    if(isNaN(parse)) {
        throw new Error ('Невалидное значение')
    }
    return parse
}

let validateCount = function(quantity) {
    try {
        return parseCount(quantity);
    } catch(error) {
        return error
    }
}


class Triangle {
    constructor(a, b, c) {
        if(a + b <= c || a + c <= b || b + c <= a) {
            throw new Error ('Треугольник с такими сторонами не существует')
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }

    get perimeter() {
        return this.a + this.b + this.c;
      }
    
      get area() {
        function calculateArea(a, b, c) {
            const p = (a + b + c) / 2;
            return Math.sqrt(p * (p - a) * (p - b) * (p - c));
          }
        return +calculateArea(this.a, this.b, this.c).toFixed(3);
      }
}

function getTriangle(a, b, c) {
    try{
        return new Triangle(a, b, c)
    } catch (error){
        return {
            get area() {
                return "Ошибка! Треугольник не существует";
            }
            ,
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            }
        }
    }
}