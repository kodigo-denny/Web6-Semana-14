import React, {useState, useEffect} from "react";
import Pantalla from "./Pantalla";
import Boton from "./Boton";

function Contador({children}){
    const[valor, setValor] = useState( children===undefined ? 0 : Number(children) )
    const[saltos, setSaltos] = useState(1)

    function cambiar(num){
        setValor(num===0 ? 0 : valor+Number(num))
    }

    return(
        <div className="mt-5">
            <Pantalla>{valor}</Pantalla>
            <div className="row">
                <Boton evento={() => cambiar(-saltos)}>-</Boton>
                <Boton evento={() => cambiar(0)}>Reset</Boton>
                <Boton evento={() => cambiar(saltos)}>+</Boton>
            </div>
            <input type="Number" value={saltos} onChange={(e) => setSaltos(e.target.value)} className="form-control mt-5"></input>
            <hr></hr>
        </div>
    )
}

export default Contador