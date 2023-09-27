import React from "react";

function Boton({children, evento}){

    return(
        <button onClick={evento} className="btn btn-primary col-3 me-4">{children}</button>
    )
}

export default Boton