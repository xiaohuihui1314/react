import React from "react";


class Form extends React.Component {
    submitForm(e){
        e.preventDefault();
       var input = this.refs.AddInput;
        if(input.value=='') return;
       this.props.onAddClick(input.value);
        input.value='';
    }
    render() {
        return (
            <div>
                <form onSubmit={this.submitForm.bind(this)} >
                    <textarea name="addItem" ref="AddInput" className="form-control" style={{marginBottom:"15px"}}></textarea>
                    <button type="submit" className="btn  form-control btn-primary">提交</button>
                </form>
            </div>
        )
    }
}

export {
    Form as default
}