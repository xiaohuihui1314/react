import React from 'react';
import List from './List';
class Box extends React.Component {
    render() {
        return (
            <div>
                <section>
                    <List/>
                </section>
            </div>
        )
    }
}
export {
    Box as default
}