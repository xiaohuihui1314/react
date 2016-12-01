import React from "react";
import Item from "./Item";

class List extends React.Component {
    render() {
        return (
            <div>
                <ul className="list-group">
                    <Item/>
                </ul>
            </div>
        )
    }
}

export {
    List as default
}