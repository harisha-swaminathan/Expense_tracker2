const getExpensesTotal = (expenses) => {
    return expenses
        .map((expense) => expense.amount)
        .reduce((sum , expense) => sum + expense, 0);
} ;

export default getExpensesTotal;