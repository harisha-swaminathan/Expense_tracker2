import React from 'react';
import { connect } from 'react-redux';
import getVisibleExpenses from "../selectors/expenses";
import getExpensesTotal from '../selectors/expense-total';
import numeral from 'numeral';

export const ExpensesSummary = (props) => {
    return (
        <>
        viewing  {props.expenses.length} expense(s) totalling {numeral(getExpensesTotal(props.expenses)/100).format('$0,0.00')}!
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        expenses: getVisibleExpenses(state.expenses, state.filters)
    }
};

export default connect (mapStateToProps)(ExpensesSummary);