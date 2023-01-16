/**
 * The program
 *
 *
 * By: Igor Zhelezniak
 * Version: 1.0
 * Since:   2022-09-17
 */

import Triangle from './Triangle'

//input
console.log('')
const sside1 = prompt('Enter side1: ')
const sside2 = prompt('Enter side2: ')
const sside3 = prompt('Enter side3: ')
try {
  const side1 = parseInt(sside1)
  const side2 = parseInt(sside2)
  const side3 = parseInt(sside3)
  if (isNaN(side1)||isNaN(side2)||isNaN(side3)) {
    console.log('Invalid Input')
  } else {
    const testTriangle1 = new Triangle(side1, side2, side3)
    console.log(`Created a ${side1} mm by ${side2} mm by ${side3} mm triangle.`)
    console.log(
      ' → Length of side1 of Triangle is: ' +
        testTriangle1.getSide1().toFixed(4) +
        ' mm'
    )
    console.log(
      ' → Length of side2 of Triangle is: ' +
        testTriangle1.getSide2().toFixed(4) +
        ' mm'
    )
    console.log(
      ' → Length of side2 of Triangle is: ' +
        testTriangle1.getSide3().toFixed(4) +
        ' mm'
    )
    console.log(' → Is the triangle valid: ' + testTriangle1.isValid().toString())
    console.log(
      ' → Semiperimeter: ' + testTriangle1.getSemiPerimeter().toFixed(4) + ' mm'
    )
    console.log(' → Area: ' + testTriangle1.getArea().toFixed(4) + ' mm²')
    console.log(' → Type: ' + testTriangle1.getTriangleType())
    console.log(' → Angle 1: ' + testTriangle1.getAngle(1).toFixed(4) + ' rad')
    console.log(' → Angle 2: ' + testTriangle1.getAngle(2).toFixed(4) + ' rad')
    console.log(' → Angle 3: ' + testTriangle1.getAngle(3).toFixed(4) + ' rad')
    console.log(' → Height 1: ' + testTriangle1.getHeight(1).toFixed(4) + ' mm')
    console.log(' → Height 2: ' + testTriangle1.getHeight(2).toFixed(4) + ' mm')
    console.log(' → Height 3: ' + testTriangle1.getHeight(3).toFixed(4) + ' mm')
    console.log(
      ' → Inner circle radius: ' +
        testTriangle1.getinnerCircleRadius().toFixed(4) +
        ' mm'
    )
    console.log(
      ' → Circumcircle radius: ' +
        testTriangle1.getcircumRadius().toFixed(4) +
        ' mm'
    )
  }
}
console.log('\nDone.')
