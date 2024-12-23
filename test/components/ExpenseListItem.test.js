import React from 'react';
import { render } from '@testing-library/react';
import ExpenseListItem from "../../src/components/ExpenseListItem";
import { BrowserRouter } from 'react-router-dom';
import expenses from '../fixtures/expenses';

test('expenseList is rendered with expenses as expected', () =>{
    const { asFragment } = render(<BrowserRouter> <ExpenseListItem key={expenses[0].id} {...expenses[0]}/> </BrowserRouter>);
    expect(asFragment()).toMatchSnapshot();
});
