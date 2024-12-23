import { addExpense, deleteExpense, editExpense} from '../../src/actions/expenses';

test('add expense return delete action as expected', () => {
    const expectedExpense = {
        note:'ignore this note',
        amount: 100,
        createdAt: 10,
        description: 'description',
    }
    const editAction = addExpense(expectedExpense);
    expect(editAction).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expectedExpense,
            id: expect.any(String)
        }
    });
});

test('action generator returns delete action as expected', () => {
    const deleteAction = deleteExpense('123');
    expect(deleteAction).toEqual({
        id: '123',
        type: 'DELETE_EXPENSE'
    });
});

test('action generator returns edit action as expected', () => {
    const editAction = editExpense(1111, {note:'don\'t ignore this note'});
    expect(editAction).toEqual({
        type: 'EDIT_EXPENSE',
        id: 1111,
        updates: {
            note:'don\'t ignore this note'
        }
    });
});