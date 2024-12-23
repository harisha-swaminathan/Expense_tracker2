import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../../src/actions/filters';

test('action generator returns text filter as expected', () => {
    const setTextAction = setTextFilter('bill');
    expect(setTextAction).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'bill'
    })
});

test('action generator returns sort by amount filter as expected', () => {
    const sortByAmountAction = sortByAmount();
    expect(sortByAmountAction).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
});

test('action generator returns sort by date filter as expected', () => {
    const sortByDateAction = sortByDate();
    expect(sortByDateAction).toEqual({
        type: 'SORT_BY_DATE'
    })
});

test('action generator returns set start Date filter as expected', () => {
    const setStartDateAction = setStartDate('12/12/2012');
    expect(setStartDateAction).toEqual({
        type: 'SET_START_DATE',
        startDate: '12/12/2012'
    })
});

test('action generator returns set end date filter as expected', () => {
    const setEndDateAction = setEndDate('01/12/2013');
    expect(setEndDateAction).toEqual({
        type: 'SET_END_DATE',
        endDate: '01/12/2013'
    })
});