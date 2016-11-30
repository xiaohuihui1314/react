export const ADD="ADD";
export const DEL="DEL";
export const TODO="TODO";
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const ActionData={
    show_ALL:"show_ALL",
    show_ACTIVE:"show_ACTIVE"
};
export function add(add) {
    return{
        type:ADD,
        text:add
    }
};
export function dalete(del) {
    return{
        type:DEL,
        text:del
    }
};
export function todo(todo) {
    return{
        type:TODO,
        todo
    }
}
export function setVisibilityFilter(filter) {
    return { type: SET_VISIBILITY_FILTER, filter }
};