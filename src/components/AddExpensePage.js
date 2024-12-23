import React from 'react';
import CreateAndEditExpense from './CreateAndEditExpense';
import { connect } from "react-redux";
import { addExpense } from "../actions/expenses";
import { useNavigate } from "react-router";

export const AddExpensePage = (props) => {
    const navigator = useNavigate();
    return (
        <div>
            <h1> Add Expense</h1>
            <CreateAndEditExpense 
                onSubmit={(expense) => {
                   props.addExpense(expense)
                    navigator("/");
                }}
            />
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    
    addExpense: ({description, note, amount, createdAt}) => {
        dispatch(addExpense({ 
            description,
            note,
            amount,
            createdAt
        }));
    }
    
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);