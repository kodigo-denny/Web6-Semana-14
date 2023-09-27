import React from "react";

class Pantalla extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return <div>
            <input type="text" className="form-control" value={this.props.children} readOnly disabled />
        </div>
    }
}

export default Pantalla