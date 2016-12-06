import fetch from 'isomorphic-fetch';
export const ADD="ADD";
export const CLICK="CLICK";
export const CHECK="CHECK";
export const DATASTATE="DATASTATE";
export const ClICKREQUEST ="ClICKREQUEST";
export const STARTREQUEST="STARTREQUEST";
export const SUCCESSREQUEST ="SUCCESSREQUEST";

// 点击请求
export function Clickrequest(data) {
    return{
        type:ClICKREQUEST,
        data
    }
}
// 开始请求
 function Startrequest(data) {
    return{
        type:STARTREQUEST,
        data
    }
}
// 请求成功
 function Successrequest(name,json) {
    return{
        type:SUCCESSREQUEST,
        name:name,
        posts:json.data.children.map(child => child.data),
    }
}

// 远程获取数据
function fetchRequest(name) {
  return dispatch=> {
      dispatch(Startrequest(name));
      return fetch(`https://www.reddit.com/r/${name}.json`)
          .then(response => response.json())
          .then(json => dispatch(Successrequest(name, json)));
  }
}

// 触发获取数据
export  function requireRequset(name){
   return (dispatch)=>{
        dispatch(fetchRequest(name))
    }
}
export const DateArry={
    SHOW_ALL:"SHOW_ALL",
    SHOW_ITEM:"SHOW_ITEM"

};
export function Add(add) {
    return{
        type:ADD,
        text:add
    }
}
export function Check(check) {
    return{
        type:CHECK,
        check
    }
}
export function Click(click) {
    return{
        type:CLICK,
        click
    }
}

export function Data(data) {
    return{
        type:DATASTATE,
        data
    }
}
