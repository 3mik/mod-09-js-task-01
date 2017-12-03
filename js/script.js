function getTriangleArea (a, h) {

    if (isNaN(a) || isNaN(h)) {
      return 'Nieprawidłowe dane';
    }

    if (a <= 0 || h <= 0) {
        return 'Nieprawidłowe dane';
    }

    return a*h/2;
}

console.log(getTriangleArea(10, 6));
var triangleField_1 = getTriangleArea(0, 6);
var triangleField_2 = getTriangleArea('a', 6);
var triangleField_3 = getTriangleArea(-2, 6);