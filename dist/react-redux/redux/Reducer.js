import {combineReducers} from 'redux';
import {ADD, CLICK,CHECK, DATASTATE, DateArry} from './Action';

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
    datas: [
        {
            text:"hello",
            checked:true
        },
        {
            text:"hi",
            checked:false
        }
    ],
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
const Todo = combineReducers({dateArry, todos});
export default Todo;