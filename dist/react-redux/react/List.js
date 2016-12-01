import React from "react";
import Item from "./Item";

class List extends React.Component {
    render() {
        var itenArr=this.props.list.todos.datas.map(function (value, index) {
            return <Item key={index}>{value.text}</Item>
        });
        return (
            <div>
                <ul className="list-group" >
                    {itenArr}
                </ul>
            </div>
        )
    }
}

export {
    List as default
}