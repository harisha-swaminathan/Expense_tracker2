import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import expenses from '../fixtures/expenses';

import { BrowserRouter } from 'react-router-dom';
import { EditExpensePage } from "../../src/components/EditExpensePage";


beforeEach(() => {
    jest.mock('react-router', () => ({
        ...jest.requireActual('react-router'),
        useParams: jest.fn().mockReturnValue({id: 1}),
    }));
});
  
test('should render AddExpensePage', () =>{
    const { asFragment } = render( <BrowserRouter> <EditExpensePage expenses={expenses}/> </BrowserRouter>);

    expect(asFragment()).toMatchSnapshot();
});
