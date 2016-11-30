import { createStore } from 'redux';
import {add,dalete,ActionData,setVisibilityFilter} from './Action';
let store = createStore();
let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);

// 发起一系列 action
store.dispatch(add('Learn about actions'));
store.dispatch(add('Learn about reducers'));
store.dispatch(add('Learn about store'));
store.dispatch(dalete(0));
store.dispatch(dalete(1));
store.dispatch(setVisibilityFilter(ActionData.show_ALL));
// 停止监听 state 更新
unsubscribe();