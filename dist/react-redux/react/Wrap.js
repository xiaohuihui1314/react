import React from 'react';
import {connect} from 'react-redux';
import {Add,Click,DATASTATE,DateArry} from  '../redux/Action';
import Box from './Box';
import Form from './Form';

class Wrap extends React.Component{

    render(){
        console.log( this.props);

        return(
            <div>
                <Box/>
                <Form onAddClick={this.props.Add} />
            </div>
        )
    }
}
function select(dispatch) {
    return{
        Add:(e)=>{
            dispatch(Add(e))
        }
    }
    
}
export default connect(select)(Wrap);