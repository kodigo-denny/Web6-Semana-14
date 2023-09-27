import React from "react";

class Boton extends React.Component{

    constructor(props){
        super(props)
    }


    render(){
        return <button onClick={this.props.evento} className={`btn btn-${(this.props.color === undefined ? "secondary": this.props.color)} col-${(this.props.col === undefined ? "3" : this.props.col)}`}>
            {this.props.children}
        </button>
    }
}

export default Boton