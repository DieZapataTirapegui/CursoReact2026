import { describe, test,expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MyAwesomeApp } from './MyAwesomeApp';

describe('MyAwesomeApp', () => {

    test('should render name and lastname', () => {
        //1. Arrange
        const { container } = render(<MyAwesomeApp />)
        screen.debug();

        //2. Act
        const h1 = container.querySelector('h1');
        const h3 = container.querySelector('h3');
        
        //3. Assert
        expect(h1?.textContent).toContain('Diego');
        expect(h3?.textContent).toContain('Tirapegui');

    })

    test('should render name and lastname - screen', () => {
        //1. Arrange
        render(<MyAwesomeApp />)
        screen.debug();
        const h1 = screen.getByTestId('name');
        expect(h1.innerHTML).toContain('Diego');

        // //2. Act
        // // const h1 = screen.getByRole('heading', { level: 1 });

        // // const h3 = screen.getByRole('heading', { level: 3 });
        // const h3 = screen.getByTestId('surname');

        // //3. Assert
        // expect(h1.innerHTML).toContain('Diego');
        // expect(h3.innerHTML).toContain('Tirapegui');
    })

    test('should match snapshot', () => {
        const { container } = render(<MyAwesomeApp />)
        expect(container).toMatchSnapshot();
        
    })

})