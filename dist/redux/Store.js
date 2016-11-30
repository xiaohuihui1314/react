import { createStore } from 'redux';
import todoApp from './Reducer'
import {add,dalete,todo,ActionData,setVisibilityFilter} from './Action';
let store = createStore(todoApp);
let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);

// 发起一系列 action
store.dispatch(add('ADD1'));
store.dispatch(todo('TODO'));
store.dispatch(add('Learn about reducers'));
store.dispatch(add('Learn about store'));
store.dispatch(dalete(0));
store.dispatch(dalete(1));
store.dispatch(setVisibilityFilter(ActionData.show_ACTIVE));
// 停止监听 state 更新
unsubscribe();