import React from 'react';
import {connect} from 'react-redux';
import {Add, Check,requireRequset} from  '../redux/Action';
import Box from './Box';
import Form from './Form';
import AsyncList from './AsyncList';

class Wrap extends React.Component {
    //初始化渲染后触发
    componentDidMount() {
        console.log('执行componentDidMount');
        const {clickRequest} = this.props;
        this.props.requireRequset(clickRequest);

    }
    render() {
        const {isFetching,posts}=this.props;
        return (
            <div>
                <Box list={this.props.list} checkChange={this.props.checkChange}/>
                <Form onAddClick={this.props.Add}/>
                {isFetching && posts.length === 0 &&
                <h2>正在加载中，请稍后......</h2>
                }
                {
                    posts.length>0&&
                        <ul>
                            <AsyncList posts={posts}/>
                        </ul>
                }
            </div>
        )
    }
}
function mapStateToProps(state) {
    const {clickRequest,postBy} =state;
    const {isFetching,items: posts}=postBy[clickRequest]||{isFetching: true, items: []};
    return {
        list:state.todos,
        clickRequest,
        isFetching,
        posts
    }
}
function select(dispatch) {
    return {
        Add: (e)=> {
            dispatch(Add(e))
        },
        checkChange: (e)=> {
            dispatch(Check(e))
        },
        requireRequset:(e)=>{
            dispatch(requireRequset(e))
        }
    }

}
export default connect(mapStateToProps, select)(Wrap);