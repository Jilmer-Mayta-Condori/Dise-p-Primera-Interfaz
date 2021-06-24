import React from 'react';

const MessageComponent = ({mensaje}) =>{
    return(
      <li className="lista_mensajes">
        <div className="center">
          <img src={mensaje.imagen} alt="Elizabeth Holmes" class="leaderboard__picture"></img>
          <h3 class="leaderboard__name">{mensaje.nombre}</h3>
          <p class="leaderboard__value">{mensaje.mensaje}</p>
        </div>
        <div className="notifi">
          <p className="fecha">{mensaje.hora}</p>
          <p className="numero">{mensaje.cantida}</p>
        </div>
      </li>
    )
}

export default MessageComponent