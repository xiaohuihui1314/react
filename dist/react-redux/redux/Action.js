export const ADD="ADD";
export const CLICK="CLICK";
export const DATASTATE="DATASTATE";

export const DateArry={
    SHOW_ALL:"SHOW_ALL",
    SHOW_ITEM:"SHOW_ITEM"

};
export function Add(add) {
    return{
        type:Add,
        add
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
