import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from './ExpenseListItem';
import getVisibleExpenses from "../selectors/expenses";

export const ExpenseList = (props) => {
    return (
        <>
            {
                props.expenses.length ===0 ? (
                    <p> No expenses </p>
                ) : (
                    props.expenses.map((expense) => {
                        return <ExpenseListItem key={expense.id} {...expense}/>
                    })
                )}
        </>
    );
}
const mapStateToProps = (state) => {
    return {
        expenses: getVisibleExpenses(state.expenses, state.filters)
    }
};

const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList);

export default ConnectedExpenseList;