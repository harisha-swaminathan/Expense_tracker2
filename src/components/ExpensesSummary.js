import React from 'react';
import { connect } from 'react-redux';
import getVisibleExpenses from "../selectors/expenses";
import getExpensesTotal from '../selectors/expense-total';
import numeral from 'numeral';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {

    const word = expenseCount === 1 ? 'expense': 'expenses';
    const formatedTotal = numeral((expensesTotal)/100).format('$0,0.00');

    return (
        <>
        viewing {expenseCount} {word} totalling {formatedTotal}!
        </>
    );
};

const mapStateToProps = (state) => {
    
    const expenses = getVisibleExpenses(state.expenses, state.filters);

    return {
        expenseCount: expenses.length,
        expensesTotal: getExpensesTotal(expenses)
    }
    
};

export default connect (mapStateToProps)(ExpensesSummary);