import {combineReducers} from 'redux';
import {ADD, CLICK, DATASTATE, DateArry} from './Action';

const {SHOW_ALL} =DateArry;

function dateArry(state = SHOW_ALL, action) {
    switch (action.type) {
        case DATASTATE:
            return action.data;
        default:
            return state;
    }
}
function todos(state = [], action) {
    switch (action.type) {
        case ADD:
            return ;
        case CLICK:
            return;
        default:
            return state;
    }
}
const Todo = combineReducers({dateArry, todos});
export default Todo;