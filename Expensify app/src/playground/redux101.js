import { createStore } from 'redux';

const incrementCount = ({ incrementBy=1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy=1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const multiplyCount = ({ multiplyBy=1} = {}) => ({
    type: 'MULTIPLY',
    multiplyBy
});

const setCount = ({ count }) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET',
});

const countReducer = (state={ count: 0 }, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'MULTIPLY':
            return {
                count: state.count * action.multiplyBy
            }
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.count
            }
            default:
                return state;
    }
}

const store = createStore(countReducer);

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 12 }));

store.dispatch(resetCount());

store.dispatch(decrementCount({ decrementBy: 4 }));

store.dispatch(multiplyCount({ multiplyBy: 15 }));

store.dispatch(setCount({ count: 172 }));

