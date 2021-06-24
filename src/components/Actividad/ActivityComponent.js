import React from 'react';

const ActivityComponent = ({actividad}) =>{
    return(
        <div className="lista_activity">
          <li>
            <div className="item_activitu">
              <img src={actividad.imagen} alt="" ></img>
              <p>{actividad.nombre}</p>
            </div>
          </li>
        </div>
    )
}

export default ActivityComponent