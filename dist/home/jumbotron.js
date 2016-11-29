import React from 'react';

class Jumbotron extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="jumbotron">
                        <h2>你好，世界！</h2>
                        <p>
                            欢迎您来到我的世界~
                        </p>
                        <p>
                            <a href="#" className="btn btn-primary btn-lg" role="button">Learn more »</a>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
export {
    Jumbotron as default
}