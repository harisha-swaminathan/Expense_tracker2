import getExpensesTotal from '../../src/selectors/expense-total';
import expenses from '../fixtures/expenses';

test('total is as expected when there are multiple expenses', () => {
   const total =  getExpensesTotal(expenses);
   expect (total).toBe(2180);
});

test('total is as expected when there is a single expense', () => {
    const total =  getExpensesTotal([expenses[0]]);
    expect (total).toBe(850);
 });

test('total is as expected to be zero when tehre are no expenses', () => {
    const total =  getExpensesTotal([]);
    expect (total).toBe(0);
 })