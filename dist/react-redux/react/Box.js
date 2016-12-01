import React from 'react';
import List from './List';
class Box extends React.Component {
    render() {
        return (
            <div>
                <section>
                    <List list={this.props.list}/>
                    <p>数量：{this.props.list.todos.length}</p>
                </section>
            </div>
        )
    }
}
export {
    Box as default
}