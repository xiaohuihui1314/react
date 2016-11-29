import React from 'react';

class  Nav extends React.Component{

    render(){
        return(
            <div>
                <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#">MyHome</a>
                        </div>
                        <div id="navbar" className="navbar-collapse collapse">
                            <ul className="nav navbar-nav">
                                <li className="active"><a href="#">我的</a></li>
                                <li><a href="#about">关于</a></li>
                                <li><a href="#contact">主页</a></li>
                            </ul>
                            <div className="nav navbar-nav navbar-right">
                                <form className="navbar-form navbar-right">
                                    <input type="text" className="form-control" placeholder="Search..."/>
                                    <button className="btn btn-primary">查询</button>
                                </form>
                            </div>
                        </div>

                    </div>
                </nav>
            </div>
        )
    }
}
export {
    Nav as default
}