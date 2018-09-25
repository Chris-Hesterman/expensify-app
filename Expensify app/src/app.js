import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({
    description: 'water bill',
    amount: 300,
    note: 'expensive',
    createdAt: 4300
}));

store.dispatch(addExpense({
    description: 'gas bill',
    amount: 400,
    createdAt: 5000
}));

store.dispatch(addExpense({
    description: 'cable',
    amount: 2600,
    createdAt: -1000,
    note: 'Comcast'
}));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses, state);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

const app = document.querySelector("#app");
ReactDOM.render(jsx, app);

