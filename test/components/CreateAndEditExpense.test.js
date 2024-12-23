import React from 'react';
import { render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import { userEvent } from '@testing-library/user-event';
import CreateAndEditExpense from "../../src/components/CreateAndEditExpense";
import { BrowserRouter } from 'react-router-dom';
import expenses from '../fixtures/expenses';

let mockedDate;
let dateSpy;

beforeEach(() => {
    mockedDate = new Date(1996, 6, 19);
    dateSpy = jest.spyOn(global, "Date").mockImplementation(() => mockedDate);
});
  
afterEach(() => {
    dateSpy.mockRestore();
});

test('expenseList is rendered with expenses as expected', () =>{
    const mockedDate = new Date(1996, 6, 19);
    const { asFragment } = render(<BrowserRouter> <CreateAndEditExpense expenseToEdit={expenses[0]}/> </BrowserRouter>);

    expect(asFragment()).toMatchSnapshot();
});

test('expenseList is rendered without any expense as expected', () =>{
    const { asFragment } = render(<BrowserRouter> <CreateAndEditExpense/> </BrowserRouter>);

    expect(asFragment()).toMatchSnapshot();
});

test('should render error', async () => {
    const { asFragment } = render(<BrowserRouter> <CreateAndEditExpense/> </BrowserRouter>);
    const user = userEvent.setup();
    const submitButton = screen.getByTestId('form-submit');

    await user.click(submitButton);

    expect(screen.getByText('Please provide Description and amount!')).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
});

test('should set description on input change', async () => {
    const { asFragment } = render(<BrowserRouter> <CreateAndEditExpense/> </BrowserRouter>);
    const description = screen.getByPlaceholderText('Description');

    fireEvent.change(description, {target: {value: 'new description'}});
    expect(description.value).toBe('new description');
    expect(asFragment()).toMatchSnapshot();
});

test('should set notes on input change', async () => {
    const { asFragment } = render(<BrowserRouter> <CreateAndEditExpense/> </BrowserRouter>);
    const notes = screen.getByPlaceholderText('add a note for you expense');

    fireEvent.change(notes, {target: {value: 'a new bag for my bday'}});
    expect(notes.value).toBe('a new bag for my bday');
    expect(asFragment()).toMatchSnapshot();
});

test('should set amount on valid input', async () => {
    const { asFragment } = render(<BrowserRouter> <CreateAndEditExpense/> </BrowserRouter>);
    const amount = screen.getByPlaceholderText('Amount');
    const value = '12.50';

    fireEvent.change(amount, {target: {value}});
    expect(amount.value).toBe(value);
    expect(asFragment()).toMatchSnapshot();
});

test('should not set amount on invalid input', async () => {
    const { asFragment } = render(<BrowserRouter> <CreateAndEditExpense/> </BrowserRouter>);
    const amount = screen.getByPlaceholderText('Amount');
    const value = '12.777';

    
    fireEvent.change(amount, {target: {value}});
    expect(amount.value).toBe("");
    expect(asFragment()).toMatchSnapshot();
});

test('should call onsubmit prop for valid form submission', async () => {
    const submitSpy = jest.fn();

    render(<BrowserRouter> <CreateAndEditExpense 
        expenseToEdit={expenses[0]} 
        onSubmit={submitSpy}/> 
    </BrowserRouter>);
    const user = userEvent.setup();
    const submitButton = screen.getByTestId('form-submit');

    await user.click(submitButton);
    expect(submitSpy).toHaveBeenCalled();
    expect(submitSpy).toHaveBeenCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        createdAt: expenses[0].createdAt.valueOf(),
        note: expenses[0].note
    })
});
