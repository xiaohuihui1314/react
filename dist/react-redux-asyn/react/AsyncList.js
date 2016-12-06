import React from "react";


class AsyncList extends React.Component {
    
    render() {
        let item =this.props.posts.map(function (value, index) {
            return(
                <li key={index}>{value.title}</li>
            )
        });
        return (
            <div>
                {item}
            </div>
        )
    }
}

export {
    AsyncList as default
}