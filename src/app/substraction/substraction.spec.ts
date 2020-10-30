import { substraction } from "./substraction"

describe('substraction unit tests', () => {
    
    
it('Should subs 0 -2  = -2', () => {

// Pattern AAA (Arrange - Act - Assert)

// Arrange
let result = 0;

// Act
result = substraction(0, 2);

// Assert
expect(result).toBe(-2);
})

xit('Should subs 9 -3 -2 = 6', () => {
// Arrange
let result = 0;
// Act
result = substraction(0, 2);
// Assert
expect(result).toBe(-2);
})
xit('Should subs 3.1416 - 0.1416 = 3.0', () => {
// Arrange
let result = 0;
// Act
result = substraction(3.1416, 0.1416);
// Assert
expect(result).toBe(3.0);
})
xit('Should subs 2.7 - 0.7 = 2.0', () => {
    // Arrange
let result = 0;
// Act
result = substraction(2.0, 0.7);
// Assert
expect(result).toBe(2.0);
})

}) 





