import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should set up removeExpense action object', () => {
    const action = removeExpense({ id: '123abc' });
    
    expect(action).toEqual({ type: 'REMOVE_EXPENSE', id: '123abc'})
});

test('should set up addExpense action object', () => {
    const action = editExpense('123dcf', {note: 'fun with testing'});

    expect(action).toEqual({ 
        type: 'EDIT_EXPENSE', 
        id: '123dcf', 
        updates: { 
            note: 'fun with testing' 
        }
    });
});

test('should set up addExpense action object', () => {
    const expenseData = {
        description: 'rent',
        amount: 2500,
        note: 'test note',
        createdAt: 345345345
    };
    const action = addExpense(expenseData);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        },
    });
});
test('should set up addExpense action object with default values', () => {
    const action = addExpense();

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: expect.any(String),
            amount: expect.any(Number),
            createdAt: expect.any(Number),
            note: expect.any(String)
        }
    });
});