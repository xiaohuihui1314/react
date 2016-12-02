import React from 'react';
import {connect} from 'react-redux';
import {Add,Check} from  '../redux/Action';
import Box from './Box';
import Form from './Form';

class Wrap extends React.Component{
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