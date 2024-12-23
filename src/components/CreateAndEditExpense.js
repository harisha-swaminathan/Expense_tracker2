import React, { useState } from "react";
import DatePicker from "react-datepicker";

const CreateAndEditExpense = (props) => {
    const expenseToEdit = props.expenseToEdit || {};    
    const [description, setDescription] =  useState(expenseToEdit.description ? expenseToEdit.description : '');
    const [amount, setAmount] =  useState(expenseToEdit.amount ?  (expenseToEdit.amount/100).toString() : '');
    const [note, setNote] =  useState(expenseToEdit.note ? expenseToEdit.note : '');
    const [createdAt, setCreatedAt] =  useState(expenseToEdit.createdAt || new Date());
    const [error, setError] =  useState('');

    const onDescriptionChange = (e) => {
        setDescription(e.target.value)
    };
    const onAmountChange = (e) => {
        const amount = e.target.value;

        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            setAmount(e.target.value);
        }
    };
    const onNoteChange = (e) => {
        setNote(e.target.value)
    };
    const onDateChange = (createdAt) => {
        if(createdAt) {
            setCreatedAt(createdAt);
        }
    };
    const onExpenseFormSubmit = (e) => {
        e.preventDefault();
        if(!description || !amount) {
            setError('Please provide Description and amount!');
            return;
        }
        setError('');
        props.onSubmit({
            description,
            amount: parseFloat(amount, 10) * 100,
            createdAt: createdAt.valueOf(),
            note
        });
    };
    return (
        <>
            {!!error && <p>{error}</p>}
            <form onSubmit={onExpenseFormSubmit} data-testid="form-element">
                <input
                    type="text"
                    placeholder="Description"
                    onChange={onDescriptionChange}
                    value = {description}
                    autoFocus
                />
                <input
                    type="text"
                    placeholder="Amount"
                    onChange={onAmountChange}
                    value = {amount}
                />
                <DatePicker 
                    selected={createdAt} 
                    showIcon
                    format="dd/MM/yy"
                    onChange={onDateChange} 
                />
                <textarea
                    placeholder="add a note for you expense"
                    onChange={onNoteChange}
                    value = {note}
                />
                <button data-testid="form-submit"> Add Expense</button>
            </form>
        </>
    );
}

export default CreateAndEditExpense;

