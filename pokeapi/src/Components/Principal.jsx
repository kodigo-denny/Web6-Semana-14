import React, {useState, useEffect} from "react";
import axios from "axios";
import Pokemon from "./Pokemon";

function Principal(){

    const[listado, setListado] = useState([])
    const[seleccion, setSeleccion] = useState(1)
    const[pokemones, setPokemones] = useState([])
    const[rerender, setRerender] = useState(false);

    useEffect(() => {
        let lista = []
        // Final 1017
        for(let i = 1; i <= 1017; i++){
            lista.push(i)
        }
    
        setListado(lista)
        //console.log("Se a creado la lista")
    },[])

    async function agregar(){
        try{
            let res = await axios.get("https://pokeapi.co/api/v2/pokemon/"+seleccion)
            let data = await res.data

            let lista = pokemones

            console.log(pokemones)
            
            lista.push(data)
            setPokemones(lista)
            //console.log(data)
            setRerender(!rerender);
        }
        catch(error){
            console.log(error)
            alert(error)
        }
    }


    return(
        <div>
            <h1>Principal</h1>
            <div className="row">
            {
                /*
                listado.map((value, index) => {
                    return <button className="btn btn-primary col-1 mt-2 me-2" key={index}>{value}</button>
                })
                */
            }
            </div>

            <select className="form-select" value={seleccion} onChange={(e) => setSeleccion(e.target.value)}>
                {
                    listado.map((value, index) => {
                        return <option value={value} key={index}>Pokemon Nº {value}</option>
                    })
                }    
            </select>
            <button onClick={agregar} className="btn btn-primary">Agregar</button>

            <hr></hr>
            <div className="row">
            {

                pokemones.map((value, index) =>{
                    return <Pokemon key={index} tipos={value.types} peso={value.weight} imagen={value.sprites.front_default}>{value.name}</Pokemon>
                })
            }
            </div>
        </div>
    )
}

export default Principal