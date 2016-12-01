import React from 'react';
import {connect} from 'react-redux';
import {Add} from  '../redux/Action';
import Box from './Box';
import Form from './Form';

class Wrap extends React.Component{
    render(){
        return(
            <div className="container">
                <Box list={this.props.list}/>
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
        }
    }
    
}
export default connect(mapStateToProps,select)(Wrap);