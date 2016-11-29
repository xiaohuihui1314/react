import React from 'react';

class Form extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    <form className="form-horizontal col-xs-8 col-xs-offset-2" role="form">
                        <div className="form-group">
                            <label for="inputEmail3" className="col-sm-2 control-label">用户名：</label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control" id="inputEmail3" placeholder="Username"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="inputPassword3" className="col-sm-2 control-label">密码：</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control" id="inputPassword3" placeholder="Password"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-10">
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox"/> 记住我
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-xs-10 col-xs-offset-2">
                                <button type="submit" className="btn btn-primary form-control">确定</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export {
    Form as default
}