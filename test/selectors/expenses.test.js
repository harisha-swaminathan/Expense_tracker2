import getVisibleExpenses from '../../src/selectors/expenses';

const expense1 = {
    id: '1',
    description: 'celine bag',
    note: 'bday gift to myself',
    amount: 850,
    createdAt:  new Date(2025, 4, 22)
}
const expense2 = {
    id: '2',
    description: 'diamond ring',
    note: 'gift to myself for projects',
    amount: 1250,
    createdAt: new Date(2025, 3, 10)
}
const expense3 = {
    id: '3',
    description: 'jeans',
    note: 'madewell',
    amount: 80,
    createdAt: new Date(2024, 11, 28)
};
test('expenses are sorted by amount as expected', () => {
    const expenses = [expense1, expense2, expense3];
    const visibleExpenses = getVisibleExpenses(expenses, {sortBy: 'amount'});

    expect(visibleExpenses).toEqual([expense2, expense1, expense3]);
});

test('expenses are sorted by date as expected', () => {
    const expenses = [expense1, expense2, expense3];
    const visibleExpenses = getVisibleExpenses(expenses, {sortBy: 'date'});

    expect(visibleExpenses).toEqual([expense1, expense2, expense3]);
});

test('expenses are filtered by text as expected', () => {
    const expenses = [expense1, expense2, expense3];
    let visibleExpenses = getVisibleExpenses(expenses, {text: 'jean'});

    expect(visibleExpenses).toEqual([expense3]);

    visibleExpenses = getVisibleExpenses(expenses, {text: 'bag'});
    expect(visibleExpenses).toEqual([expense1]);

    visibleExpenses = getVisibleExpenses(expenses, {text: 'ring'});
    expect(visibleExpenses).toEqual([expense2]);

    visibleExpenses = getVisibleExpenses(expenses, {text: 'blah'});
    expect(visibleExpenses.length).toEqual(0);
});

test('expenses are filtered by date as expected', () => {
    const expenses = [expense1, expense2, expense3];
    let visibleExpenses = getVisibleExpenses(expenses, {startDate: new Date(2025, 4, 20)});

    expect(visibleExpenses).toStrictEqual([expense1]);

    visibleExpenses = getVisibleExpenses(expenses, {endDate: new Date(2024, 11, 31)});
    expect(visibleExpenses).toEqual([expense3]);

    visibleExpenses = getVisibleExpenses(expenses, {startDate: new Date(2025, 0, 1), endDate:  new Date(2025, 6, 6)});
    expect(visibleExpenses).toEqual([expense2, expense1]);
});