import {combineReducers} from 'redux';
import {ADD,DEL,TODO,SET_VISIBILITY_FILTER,ActionData} from './Action';
const { show_ALL } = ActionData;

function actionData(state = show_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}
function todos(state=[],action) {
    console.log(action.type);
    switch (action.type) {
        case ADD:
            return [
                ...state,
                {
                    text: action.text,
                    state:true,
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
function todo(state=[],action) {
    switch (action.type){
        case TODO:
            return [
                ...state,
                {
                    text: action.type,
                    todo: "hello todo!"
                }
            ];
        default:
            return state;
    }
}
const todoApp = combineReducers({
    actionData,
    todos,
    todo
});

export default todoApp;

