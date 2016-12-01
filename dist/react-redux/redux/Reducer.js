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
const list = {
    datas: [],
    length: 0
};
function todos(state =list, action) {
    console.log(state);
    console.log(action);
    switch (action.type) {
        case ADD:
            return{
                datas:[...state.datas,action],
                length:state.length+1
            };
        case CLICK:
            return;
        default:
            return state;
    }
}
const Todo = combineReducers({dateArry, todos});
export default Todo;