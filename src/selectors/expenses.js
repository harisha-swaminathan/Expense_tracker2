import { isBefore, isAfter } from "date-fns";


const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
      
        const description = expense.description.toLowerCase();
        const textMatch = typeof text !== 'string' || description.includes(text.toLowerCase());
        const startDateMatch = !startDate || isAfter(expense.createdAt, startDate); 
        const endDateMatch =  !endDate || isBefore(expense.createdAt, endDate);

        return textMatch && startDateMatch && endDateMatch;
    }).sort((expense1, expense2) => {
        if(sortBy == 'date'){
            return expense1.createdAt < expense2.createdAt ? 1 : -1;
        } else {
            return expense1.amount < expense2.amount ? 1 : -1;
        }
    })
};

export default getVisibleExpenses;