import React from 'react';
import { render } from '@testing-library/react';
import { ExpenseList } from "../../src/components/ExpenseList";
import { BrowserRouter } from 'react-router-dom';
import expenses from '../fixtures/expenses';

test('expenseList is rendered with expenses as expected', () =>{
    const { asFragment } = render(<BrowserRouter> <ExpenseList expenses={expenses}/> </BrowserRouter>);
    expect(asFragment()).toMatchSnapshot();
});

test('expenseList is rendered with empty array as expected', () =>{
    const { asFragment } = render(<BrowserRouter> <ExpenseList expenses={[]}/> </BrowserRouter>);
    expect(asFragment()).toMatchSnapshot();
});