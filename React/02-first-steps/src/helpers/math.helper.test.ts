import { expect, test, describe } from 'vitest';
import { add, substract, multiply } from './math.helper';

describe('add function', () => {

    test('should add two positives numbers', () => {
        //1. Arrange
        const a = 1;
        const b = 2;
    
        //2. Act
        const result = add(a, b);
    
        //3. Assert
        expect(result).toBe(3);
    });

})

describe('substract function', () => {

    test('should substract two positives numbers', () => {
        //1. Arrange
        const a = 5;
        const b = 2;

        //2. Act
        const result = substract(a, b);

        //3. Assert
        expect(result).toBe(3);
    });

    test('should substract a bigger number from a smaller number', () => {
        //1. Arrange
        const a = 2;
        const b = 5;
        
        //2. Act
        const result = substract(a, b);

        //3. Assert
        expect(result).toBe(-3);
    });
})

describe('multiply function', () => {

    test('should multiply two positives numbers', () => {
        //1. Arrange
        const a = 5;
        const b = 2;

        //2. Act
        const result = multiply(a, b);
        
        //3. Assert
        expect(result).toBe(10);
    });

    test ('should multiply a positive number by zero', () => {
        //1. Arrange
        const a = 5;
        const b = 0;

        //2. Act
        const result = multiply(a, b);

        //3. Assert
        expect(result).toBe(0);
    });

});
