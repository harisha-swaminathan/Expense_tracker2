import { legacy_createStore, combineReducers } from "redux";
import { v4 as uuidv4 } from 'uuid';

const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuidv4(),
        description,
        note,
        amount,
        createdAt
    }
});

const deleteExpense = ({id}) => ({
    type: 'DELETE_EXPENSE',
    id
});

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

const setStartDate = (startDate = undefined) => ({
    type: 'SET_START_DATE',
    startDate
});
const setEndDate = (endDate = undefined) => ({
    type: 'SET_END_DATE',
    endDate
});


const expenseReducerDefaultState = [];

const expensesReducer = (state = expenseReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'DELETE_EXPENSE':
            return state.filter((expense) => expense.id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates
                    }
                }
            })
        default:
            return state;
    }
};

const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};
const filtersReducer = (state = filterReducerDefaultState, action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };
        default:
            return state;
    }
}
const store = legacy_createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
      
        const description = expense.description.toLowerCase();
        const textMatch = typeof text !== 'string' || description.includes(text.toLowerCase());
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch =  typeof endDate !== 'number' || expense.createdAt <= endDate;

        return textMatch && startDateMatch && endDateMatch;
    }).sort((expense1, expense2) => {
        if(sortBy == 'date'){
            return expense1.createdAt < expense2.createdAt ? 1 : -1;
        } else {
            return expense1.amount < expense2.amount ? 1 : -1;
        }
    })
}
store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

    console.log(visibleExpenses);
})

const expense1 = store.dispatch(addExpense({
    description: 'coffee',
    amount: 6,
    createdAt: -21
}));
const expense2 = store.dispatch(addExpense({
    description: 'rent',
    amount: 3000,
    createdAt: -1000
}));

// store.dispatch(deleteExpense({id: expense2.expense.id}));
// store.dispatch(editExpense(expense1.expense.id, {amount: 175}));

// store.dispatch(setTextFilter('E'));
// store.dispatch(setTextFilter(''));

store.dispatch(sortByAmount());
store.dispatch(sortByDate());

// store.dispatch(setstartDate(150));
// store.dispatch(setstartDate());
// store.dispatch(setEndDate(325));


const demoState = {
    expenses: [{
        id: '123',
        description: "January rent",
        note: "This was higher than last month",
        amount: 55000,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    },
};
