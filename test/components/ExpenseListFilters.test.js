import React from 'react';
import { render, screen, fireEvent} from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { ExpenseListFilter } from "../../src/components/ExpenseListFilters";
import { BrowserRouter } from 'react-router-dom';
import expenses from '../fixtures/expenses';
import filters from '../fixtures/filters';
import '@testing-library/jest-dom';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();

});

test('render expense list filter', () => {
    const { asFragment } = render(<ExpenseListFilter 
        filters={filters[0]}
        setTextFilter = {setTextFilter}
        sortByAmount = {sortByAmount}
        sortByDate = {sortByDate}
        setStartDate = {setStartDate}
        setEndDate = {setEndDate}
        />
    );
    expect(asFragment()).toMatchSnapshot();
});

test('render expense list second filter', () => {
    const { asFragment } = render(<ExpenseListFilter 
        filters={filters[1]}
        setTextFilter = {setTextFilter}
        sortByAmount = {sortByAmount}
        sortByDate = {sortByDate}
        setStartDate = {setStartDate}
        setEndDate = {setEndDate}
        />
    );
    expect(asFragment()).toMatchSnapshot();
});

test('handle text change', () => {
    render(<ExpenseListFilter 
        filters={filters[1]}
        setTextFilter = {setTextFilter}
        sortByAmount = {sortByAmount}
        sortByDate = {sortByDate}
        setStartDate = {setStartDate}
        setEndDate = {setEndDate}
        />
    );
    const textFilter = screen.getByPlaceholderText('filter by text');

    fireEvent.change(textFilter, {target: {value: 'rent'}});
    expect(setTextFilter).toBeCalledWith('rent');
});

test('should sort by date', () => {
    render(<ExpenseListFilter 
        filters={filters[1]}
        setTextFilter = {setTextFilter}
        sortByAmount = {sortByAmount}
        sortByDate = {sortByDate}
        setStartDate = {setStartDate}
        setEndDate = {setEndDate}
        />
    );
    const sortByDateInput = screen.getByTestId("select-filter");

    fireEvent.change(sortByDateInput,  { target: { value: 'date' } })
    expect(sortByDate).toHaveBeenCalled();
});

test('should sort by amount', () => {
    render(<ExpenseListFilter 
        filters={filters[1]}
        setTextFilter = {setTextFilter}
        sortByAmount = {sortByAmount}
        sortByDate = {sortByDate}
        setStartDate = {setStartDate}
        setEndDate = {setEndDate}
        />
    );
    const sortByAmountInput = screen.getByTestId("select-filter");

    fireEvent.change(sortByAmountInput,  { target: { value: 'amount' } })
    expect(sortByAmount).toHaveBeenCalled();
});