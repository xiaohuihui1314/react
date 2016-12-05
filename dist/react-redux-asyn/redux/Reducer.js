import {combineReducers} from 'redux';
import {
    ADD,
    CLICK,
    CHECK,
    DATASTATE,
    DateArry,
    ClICKREQUEST,
    STARTREQUEST,
    SUCCESSREQUEST
} from './Action';

const {SHOW_ALL} =DateArry;

function clickRequest(state = 'reactjs',action) {
    switch (action.type){
        case ClICKREQUEST:
            return action.name;
        default:
            return state;
    }
}
function requestFetch(state= {
    //是否正在获取最新
    isFetching: false,
    //内容
    items: []
}, action) {
    switch (action.type){
        case STARTREQUEST:
            return Object.assign({},state,{
                isFetching:true
            });
        case SUCCESSREQUEST:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.posts
            });
    }
}

function postBy(state = {}, action) {
    switch (action.type){
        case STARTREQUEST:
        case SUCCESSREQUEST:
            return Object.assign({},state,{
                action:requestFetch(state={},action)
            });
        default:
            return state;
    }
}

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
    checkedLength:1,
    length: 2
};
function todos(state =list, action) {
    console.log(state);
    switch (action.type) {
        case ADD:
            return{
                datas:[...state.datas,action],
                checkedLength:state.checkedLength,
                length:state.length+1
            };
        case CHECK:
           return{
               datas:[
                   [Object.assign([],state.datas, state.datas[action.check.itemIndex].checked=action.check.checked)][0]
               ][0],
               checkedLength:(()=>{
                   let num=0;
                 state.datas.map(function (value, index) {
                    if(value.checked==true){
                         num++;
                    }
                });
                   return num;
               })(),
               length:state.length
           };
        case CLICK:
            return;
        default:
            return state;
    }
}
const Todo = combineReducers({dateArry, todos,clickRequest,postBy});
export default Todo;