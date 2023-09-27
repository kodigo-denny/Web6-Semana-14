import React from "react";

function Pantalla({children}){


    return(
        <div>
            <input type="text" value={children} className="form-control" readOnly disabled />
        </div>
    )
}

export default Pantalla