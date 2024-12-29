import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

const ExpensesDashboardPage = () => (
    <div>
        
        <ExpenseListFilter/>
        <ExpenseList/>
        <ExpensesSummary/>
    </div>
);
export default ExpensesDashboardPage;