/**
 * The program
 *
 *
 * By: Igor Zhelezniak
 * Version: 1.0
 * Since:   2022-09-17
 */

import Triangle from './Triangle'

console.log('')
 
const testTriangle1 = new Triangle(3, 4, 5)
console.log('Created a 3 mm by 4 mm by 5 mm triangle.')
console.log(
  'Length of side1 of Triangle is: ' +
    testTriangle1.getSide1().toFixed(4) +
    ' mm'
)
console.log(
  'Length of side2 of Triangle is: ' +
    testTriangle1.getSide2().toFixed(4) +
    ' mm'
)
console.log(
  'Length of side2 of Triangle is: ' +
    testTriangle1.getSide3().toFixed(4) +
    ' mm'
)
console.log('Is the triangle valid: ' + testTriangle1.isValid().toString())
console.log(
    'Semiperimeter: ' + testTriangle1.getSemiPerimeter().toFixed(4) + ' mm'
)
console.log('Area: ' + testTriangle1.getArea().toFixed(4) + ' mm²')
console.log('Type: ' + testTriangle1.getTriangleType())
console.log('Angle 1: ' + testTriangle1.getAngle(1).toFixed(4) + ' rad')
console.log('Angle 2: ' + testTriangle1.getAngle(2).toFixed(4) + ' rad')
console.log('Angle 3: ' + testTriangle1.getAngle(3).toFixed(4) + ' rad')
console.log('Height 1: ' + testTriangle1.getHeight(1).toFixed(4) + ' mm')
console.log('Height 2: ' + testTriangle1.getHeight(2).toFixed(4) + ' mm')
console.log('Height 3: ' + testTriangle1.getHeight(3).toFixed(4) + ' mm')
console.log(
  'Inner circle radius: ' +
    testTriangle1.getinnerCircleRadius().toFixed(4) +
    ' mm'
)
console.log(
  'Circumcircle radius: ' + testTriangle1.getcircumRadius().toFixed(4) + ' mm'
)
console.log('\nDone.')
