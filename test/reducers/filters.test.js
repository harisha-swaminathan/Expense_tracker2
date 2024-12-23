import { startOfMonth, endOfMonth } from "date-fns";
import filtersReducer from "../../src/reducers/filters";

test('initial state is set as expected', () => {
    const state = filtersReducer(undefined, {type: 'S@INIT'});

    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: startOfMonth(new Date()),
        endDate: endOfMonth( new Date())
    });
});

test('set sortBy to amount', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});

    expect(state).toEqual({
        text: '',
        sortBy: 'amount',
        startDate: startOfMonth(new Date()),
        endDate: endOfMonth( new Date())
    });
});

test('set text filter', () => {
    const state = filtersReducer(undefined, {type: 'SET_TEXT_FILTER', text: 'ring'});

    expect(state).toEqual({
        text: 'ring',
        sortBy: 'date',
        startDate: startOfMonth(new Date()),
        endDate: endOfMonth( new Date())
    });
});

test('set start date', () => {
    const state = filtersReducer(undefined, {type: 'SET_START_DATE', startDate: new Date(2024, 4, 6)});

    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: new Date(2024, 4, 6),
        endDate: endOfMonth( new Date())
    });
});

test('set end date', () => {
    const state = filtersReducer(undefined, {type: 'SET_END_DATE', endDate: new Date(2025, 6, 7)});

    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: startOfMonth( new Date()),
        endDate: new Date(2025, 6, 7)
    });
});