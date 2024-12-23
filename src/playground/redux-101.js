import { legacy_createStore as createStore } from "redux";

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy  = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () => ({
    type: 'RESET',
});

const setCount = ({setTo} = {}) => ({
    type: 'SET',
    setTo
});

const store = createStore((state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'RESET':
            return {
                count: 0
            }
        case 'SET':
            return {
                count: action.setTo
            }
        default:
            return state;
    }
});

store.subscribe(() => {
    console.log('hello!', store.getState());
});

store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch(incrementCount({incrementBy: 10}));

store.dispatch(resetCount());

store.dispatch(setCount({setTo: 15}));


store.dispatch(decrementCount({decrementBy: 15}));
store.dispatch(decrementCount({decrementBy: 1}))

