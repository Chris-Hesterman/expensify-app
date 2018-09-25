import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses'

test('should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT' });

    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);

    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense by id if id is wrong', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: -1
    };
    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);
});

test('should add expense', () => {
    const expense = {
        id: '109',
        description: 'dumplings',
        amount: 500,
        createdAt: 23,
        note: 'tasty'
    }
    const action = { type: 'ADD_EXPENSE', expense }
    const state = expensesReducer(expenses, action);

    expect(state).toContainEqual(expense);
});

test('should edit expense', () => {
    const action = { type: 'EDIT_EXPENSE', id: 1, updates: { amount: 10000, note: 'this is the updated expense'} };
    const state = expensesReducer(expenses, action);

    expect(state).toContainEqual({
        id: 1,
        description: 'gum',
        note: 'this is the updated expense',
        amount: 10000,
        createdAt: 0
    });
});

test('should not edit expense if id does not exist', () => {
    const action = { type: 'EDIT_EXPENSE', id: -1, updates: {amount: 0, note: 'this should not be updated'}};
    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);
});
