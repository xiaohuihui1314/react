import React from 'react';
import List from './List';
class Box extends React.Component {
    render() {
        return (
            <div>
                <section>
                    <List list={this.props.list} checkChange={this.props.checkChange}/>
                    <p>item lengths：{this.props.list.length} &nbsp;checked lengths：{this.props.list.checkedLength}</p>
                </section>
            </div>
        )
    }
}
export {
    Box as default
}