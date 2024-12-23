import React, { useState } from 'react';
import {connect} from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate, setEndDate, setStartDate} from '../actions/filters';
import DatePicker from "react-datepicker";

export const ExpenseListFilter = (props) => {
    const startDate = props.filters.startDate ? props.filters.startDate.toString() : null;
    const endDate = props.filters.endDate ? props.filters.endDate.toString() : null;
    const text = props.filters.text;
    return (
        <>
        <input 
            placeholder='filter by text'
            type="text"
            value={text}
            onChange={(e) => {
                props.setTextFilter(e.target.value)
            }
        }/>
        <select
            data-testid="select-filter"
            value="date"
            onChange={(e) => {
                if(e.target.value === "amount"){
                    props.sortByAmount();
                } else {
                    props.sortByDate();
                }
            }
        }>
            <option value="date">Date</option>
            <option value="amount">Amount</option>
        </select>
        <DatePicker
            selected={startDate}
            showIcon
            onChange={(date) => {
                props.setStartDate(date)
            }}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            dateFormat="MM/dd/yyyy"
            isClearable={true}
        />
        <DatePicker
            selected={endDate}
            showIcon
            onChange={(date) => {
                props.setEndDate(date)
            }}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            dateFormat="MM/dd/yyyy"
            isClearable={true}
        />
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
};
const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (value) => {
        dispatch(setTextFilter(value));
    },
    sortByAmount: () => {
        dispatch(sortByAmount());
    },
    sortByDate: () => {
        dispatch(sortByDate());
    },
    setStartDate: (date) => {
        dispatch(setStartDate(date));
    },
    setEndDate: (date) => {
        dispatch(setEndDate(date));
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilter);