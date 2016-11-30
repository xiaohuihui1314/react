import {combineReducers} from 'redux';
import {ADD,DEL,SET_VISIBILITY_FILTER,ActionData} from './Action';
const { show_ALL } = ActionData;

function ActionData(state = show_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}
function todos(state=[],action) {
    switch (action.type) {
        case ADD:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ];
        case DEL:
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo;
            });
        default:
            return state;
    }
}

const todoApp = combineReducers({
    ActionData,
    todos
})

export default todoApp;

