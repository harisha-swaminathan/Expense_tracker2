import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import CreateAndEditExpense from './CreateAndEditExpense';
import { editExpense , deleteExpense} from '../actions/expenses';
import { useNavigate } from "react-router";

export const EditExpensePage = (props) => {
    const navigator = useNavigate();
    const id = useParams().id;
    const expenseToEdit = props.expenses.find((expense) => expense.id === id);
    const onEditExpense = (updates) => {
        props.editExpense(id, updates);
        navigator("/");
    };
    const onRemove = () => {
        props.deleteExpense(id);
        navigator("/");
    };
    return (
        <div>
            <CreateAndEditExpense expenseToEdit={expenseToEdit} onSubmit={(onEditExpense)}/>
            <button onClick={onRemove}> Remove </button>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteExpense: (id) => {
            dispatch(deleteExpense(id))
        },
        editExpense: (id, updates) => {
            dispatch(editExpense(id, updates))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);