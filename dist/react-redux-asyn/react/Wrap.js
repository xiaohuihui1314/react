import React from 'react';
import {connect} from 'react-redux';
import {Add,Check,requireRequset} from  '../redux/Action';
import Box from './Box';
import Form from './Form';

class Wrap extends React.Component{
    //初始化渲染后触发
    componentDidMount() {
        // console.log('执行componentDidMount');
        console.log('1111111111111111');
        const { dispatch, selectedReddit } = this.props;
        dispatch(requireRequset(selectedReddit));
    }

    render(){
        return(
            <div>
                <Box list={this.props.list} checkChange={this.props.checkChange}/>
                <Form onAddClick={this.props.Add} />
            </div>
        )
    }
}
function mapStateToProps(state) {
    console.log(state);
    return {
       list:state
    }
}
function select(dispatch) {
    return{
        Add:(e)=>{
            dispatch(Add(e))
        },
        checkChange:(e)=>{
            dispatch(Check(e))
        }
    }
    
}
export default connect(mapStateToProps,select)(Wrap);