import React from "react";

function Pokemon({imagen, children, peso, tipos}){
    console.log(tipos)

    return(
        <div className="card col-1" style={{width: "18rem"}}>
                    <img src={imagen} className="card-img-top" alt="..." />
                        <div className="card-body">
                      <h5 className="card-title">{children}</h5>
                      <p className="card-text">
                        <b>Peso: </b>{peso}
                        
                      </p>
                      <br /><b>Tipos:</b>
                        <ul>
                            {
                                tipos.map((value, index) => {
                                    return <li key={index}>{value.type.name}</li>
                                })
                            }
                        </ul>
                      
                    </div>
                  </div>
    )
}

export default Pokemon