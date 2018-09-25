import { setTextFilter, 
    sortByAmount, 
    sortByDate, 
    setStartDate, 
    setEndDate 
} from '../../actions/filters';
import moment from 'moment';

test('should set up action object with text property', () => {
    const action = setTextFilter('pizza');

    expect(action).toEqual({
        type:'SET_TEXT_FILTER', 
        text: 'pizza'
    });
});
test('should set up action object with text property default value', () => {
    const action = setTextFilter();

    expect(action).toEqual({
        type:'SET_TEXT_FILTER', 
        text: ''
    });
});

test('should set up action object with SORT_BY_AMOUNT type', () => {
    expect(sortByAmount()).toEqual({
        type: 'SORT_BY_AMOUNT'
    });  
});

test('should set up action object with SORT_BY_DATE type', () => {
    expect(sortByDate()).toEqual({
        type: 'SORT_BY_DATE'
    });
});

test('should set up action object with SET_START_DATE type', () => {
    const action = setStartDate(moment(0));

    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});
test('should set up action object with SET_END_DATE type', () => {
    const action = setEndDate(moment(5));

    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(5)
    });
});

