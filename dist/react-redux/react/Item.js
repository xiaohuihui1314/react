import React from "react";


class Item extends React.Component {
    render() {
        return (
            <div>
                <li className="list-group-item">
                    {this.props.children}
                </li>
            </div>
        )
    }
}

export {
    Item as default
}