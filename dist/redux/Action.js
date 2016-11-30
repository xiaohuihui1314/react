export const ADD="ADD";
export const DEL="DEL";
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const ActionData={
    show_ALL:"show_ALL",
    show_ACTIVE:"show_ACTIVE"
};
export function add(add) {
    return{
        type:add,
        text:add
    }
};
export function dalete(del) {
    return{
        type:del,
        text:del
    }
};
export function setVisibilityFilter(filter) {
    return { type: SET_VISIBILITY_FILTER, filter }
};