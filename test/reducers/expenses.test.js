import expensesReducer from "../../src/reducers/expenses";

const expenses = [{
    id: '1',
    description: 'celine bag',
    note: 'bday gift to myself',
    amount: 850,
    createdAt:  new Date(2025, 4, 22)
  }, {
    id: '2',
    description: 'diamond ring',
    note: 'gift to myself for projects',
    amount: 1250,
    createdAt: new Date(2025, 3, 10)
  }, {
    id: '3',
    description: 'jeans',
    note: 'madewell',
    amount: 80,
    createdAt: new Date(2024, 11, 28)
}];

test('default state is set as expected', () => {
    const expenses = expensesReducer(undefined, {type: '@INIT'});

    expect(expenses).toEqual([]);
});

test('add expense action adds the new expense', () => {
    const newExpense = {
        id: '4',
        description: 'yarn and needles',
        note: 'step by step sweater',
        amount: 76,
        createdAt: new Date(2024, 11, 14)
    }
    const expenseState = expensesReducer(expenses, {type: 'ADD_EXPENSE', expense: newExpense});

    expect(expenseState).toEqual([expenses[0], expenses[1], expenses[2], newExpense]);
});

test('edit expense action edits the correct expense', () => {
    const updates = {
        description: 'yarn and needles',
        note: 'step by step sweater',
        amount: 76,
        createdAt: new Date(2024, 11, 14)
    }
    const expenseState = expensesReducer(expenses, {type: 'EDIT_EXPENSE', id: expenses[2].id, updates});

    expect(expenseState[2].description).toEqual(updates.description);
    expect(expenseState[2].note).toEqual(updates.note);
    expect(expenseState[2].amount).toEqual(updates.amount);
    expect(expenseState[2].createdAt).toEqual(updates.createdAt);
});

test('delete expense action deletes the new expense', () => {
    const expenseState = expensesReducer(expenses, {type: 'DELETE_EXPENSE', id: '2'});

    expect(expenseState.length).toEqual(2);
    expect(expenseState[0].id).toEqual('1');
    expect(expenseState[1].id).toEqual('3');
});