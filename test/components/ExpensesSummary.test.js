import React from 'react';
import { render } from '@testing-library/react';
import {ExpensesSummary} from "../../src/components/ExpensesSummary";
import { BrowserRouter } from 'react-router-dom';
import expenses from '../fixtures/expenses';

test('expensesSummary is rendered with correct summary', () =>{
    const { asFragment } = render(<BrowserRouter> <ExpensesSummary expenses={expenses}/> </BrowserRouter>);
    expect(asFragment()).toMatchSnapshot();
});

test('expensesSummary is rendered as expected with 0 expenses', () =>{
    const { asFragment } = render(<BrowserRouter> <ExpensesSummary expenses={[]}/> </BrowserRouter>);
    expect(asFragment()).toMatchSnapshot();
});
