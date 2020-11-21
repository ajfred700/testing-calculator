import { addition } from "./addition"

describe('addition unit tests', () => {
    
    
it('Should add 2 + 2 = 4', () => {

// Pattern AAA (Arrange - Act - Assert)

// Arrange
let result = 0;

// Act
result = addition(2, 2);

// Assert
expect(result).toBe(4);
})

xit('Should add 0 + -2 = -2', () => {
// Arrange
let result = 0;
// Act
result = addition(0, 2);
// Assert
expect(result).toBe(-2);
})
xit('Should add 3.0 + 0.1416 = 3.1416', () => {
// Arrange
let result = 0;
// Act
result = addition(3.0, 0.1416);
// Assert
expect(result).toBe(3.1416);
})
xit('Should add 2.0 + 0.7 = 2.7', () => {
    // Arrange
let result = 0;
// Act
result = addition(2.0, 0.7);
// Assert
expect(result).toBe(2.7);
})

})  