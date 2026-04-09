import { describe, test,expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FirstStepsApp } from './FirstStepsApp';
import { ItemCounter } from './shopping-cart/ItemCounter';

const mockItemCounter = vi.fn((props:unknown) => {
    return (<div 
        data-testid="mocked-item-counter" 
    />);
});

vi.mock('./shopping-cart/ItemCounter', () => ({
    ItemCounter: (props:unknown) => mockItemCounter(props),
}));

// vi.mock('./shopping-cart/ItemCounter', () => ({
//     ItemCounter: (props:unknown) => <div data-testid="mocked-item-counter" name={props.name} quantity={props.quantity} />
// }));

describe('FirstStepsApp', () => {

    afterEach(() => {
        mockItemCounter.mockClear();
        // vi.clearAllMocks();
    })

    test('should match snapshot', () => {
        const { container } = render(<FirstStepsApp />)
        expect(container).toMatchSnapshot();

        // screen.debug();
    })


    test('should render the correct number of ItemCounter components', () => {
        render(<FirstStepsApp />)

        const itemCounters = screen.getAllByTestId('mocked-item-counter');
        expect(itemCounters.length).toBe(3);

        // screen.debug();
    })

    test('should render ItemCounter components with correct props', () => {
        render(<FirstStepsApp />)
        expect(mockItemCounter).toHaveBeenCalledTimes(3);
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: 'Play Station 5',
            quantity: 1
        });
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: 'Xbox Series X',
            quantity: 2
        });
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: 'Nintendo Switch',
            quantity: 3 
        })
    })
})