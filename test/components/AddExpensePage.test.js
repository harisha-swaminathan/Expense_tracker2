import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { BrowserRouter } from 'react-router-dom';
import { AddExpensePage } from "../../src/components/AddExpensePage";

test('should render AddExpensePage', () =>{
    const addExpense = jest.fn();
    const { asFragment } = render( <BrowserRouter> <AddExpensePage addExpense={addExpense}/> </BrowserRouter>);

    expect(asFragment()).toMatchSnapshot();
});
