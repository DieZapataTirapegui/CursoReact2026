import { render, screen, fireEvent} from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { ItemCounter } from './ItemCounter';

describe ('ItemCounter', () => {
    test('should render with default values', () => {

        const testItem = 'Test Item';
        render(<ItemCounter name={testItem} />)

        screen.debug();

        expect(screen.getByText(testItem )).toBeDefined();
    })

    test('should render with custom quantity', () => {
        const testItem = 'Nintendo Switch 2';
        const customQuantity = 5;
        render(<ItemCounter name={testItem} quantity={customQuantity} />)

        screen.debug();

        expect(screen.getByText(testItem)).toBeDefined();
        expect(screen.getByText(customQuantity.toString())).toBeDefined();
    })

    test('should increase the count when +1 button is clicked', () => {
        const testItem = 'Test Item';
        render(<ItemCounter name={testItem} />)
        const [buttonAdd] = screen.getAllByRole('button');
        // buttonAdd.click();
        fireEvent.click(buttonAdd);

        screen.debug();
        expect(screen.getByText('2')).toBeDefined();


    })

    test('should decrease the count when -1 button is clicked', () => {
        //quantity = 5
        const testItem = 'Test Item';
        render(<ItemCounter name={testItem} quantity={5} />)
        const [, , buttonSubstract] = screen.getAllByRole('button');
        // buttonAdd.click();
        fireEvent.click(buttonSubstract);

        screen.debug();
        expect(screen.getByText('4')).toBeDefined();
    })

    test('should not decrease the count when -1 button is clicked and quantity is 1', () => {
        const testItem = 'Test Item';
        render(<ItemCounter name={testItem} quantity={1} />)
        const [, buttonSubstract] = screen.getAllByRole('button');
        // buttonAdd.click();
        fireEvent.click(buttonSubstract);

        screen.debug();
        expect(screen.getByText('1')).toBeDefined();
    })

    test('should change to red when count is 1 ', () => {
        const quantity = 1;
        const name = 'Test Item';   
        render(<ItemCounter name={name} quantity={quantity} />)

        const itemText = screen.getByText(name);

        console.log(itemText.style.color);
        expect(itemText.style.color).toBe('red');

    })

    test('should change to black when count is greater than 1 ', () => {
        const quantity = 2;
        const name = 'Test Item';   
        render(<ItemCounter name={name} quantity={quantity} />)

        const itemText = screen.getByText(name);

        console.log(itemText.style.color);
        expect(itemText.style.color).toBe('black');

    })
})