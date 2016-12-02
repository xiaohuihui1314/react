import React from "react";


class Item extends React.Component {
    checkClick(e){
       this.props.checkChange({
           itemIndex:this.props.itemIndex,
           checked:e.target.checked
       })
    }
    render() {
        return (
                <li className={this.props.checked?"list-group-item item-active":"list-group-item"}>
                    <input type="checkbox" defaultChecked={this.props.checked} onChange={this.checkClick.bind(this)}/>  {this.props.children}
                </li>
        )
    }
}

export {
    Item as default
}