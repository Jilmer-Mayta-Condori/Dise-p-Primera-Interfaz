import './App.css';
import './css/estilo.css'
import ActivityComponent from './components/Actividad/ActivityComponent'
import MessageComponent from './components/Mensajes/MessageComponent';

function App() {

  const activity = [          
    { nombre: 'Mark',
      imagen: 'https://randomuser.me/api/portraits/men/32.jpg'},
    { nombre: 'Dustin',
      imagen: 'https://randomuser.me/api/portraits/men/97.jpg'},
    { nombre: 'Eli',
      imagen: 'https://randomuser.me/api/portraits/women/17.jpg'},
    { nombre: 'Evan',
      imagen: 'https://randomuser.me/api/portraits/men/37.jpg'}
  ]

  const message = [          
    { nombre: 'Mark Zuckerberg',
      mensaje: 'Que fue ?',
      imagen: 'https://randomuser.me/api/portraits/men/32.jpg',
      hora: '13:50',
      cantida: 2},
    { nombre: 'Dustin Moskovitz',
      mensaje: 'Manito ya aprobaste ?',
      imagen: 'https://randomuser.me/api/portraits/men/97.jpg',
      hora: '13:50',
      cantida: 4},
    { nombre: 'Elizabeth Holmes',
      mensaje: 'Pana que tal el proyecto?',
      imagen: 'https://randomuser.me/api/portraits/women/17.jpg',
      hora: '13:50',
      cantida: 5},
    { nombre: 'Evan Spiegel',
      mensaje: 'Hola hermano que tal vas ?',
      imagen: 'https://randomuser.me/api/portraits/men/37.jpg',
      hora: '13:50',
      cantida: 1}
  ]
  return (
    <div className="App">
        <div className="first_barra">
          <h1>ChatJilmer</h1>
          <img src="https://cdn.onlinewebfonts.com/svg/img_248841.png" alt="" style={{paddingLeft: "10px"}}></img>
          <img src="https://cdn.onlinewebfonts.com/svg/img_194915.png" alt="" ></img>
        </div>

        <ul className="activity_chat">
          <h1>Actividad</h1>
          <ActivityComponent actividad={activity[0]}/>
          <ActivityComponent actividad={activity[1]}/>
          <ActivityComponent actividad={activity[2]}/>
          <ActivityComponent actividad={activity[3]}/>
          <ActivityComponent actividad={activity[1]}/>
        </ul>

        <h1 className="mensajes">Mensajes</h1>
        <ul class="leaderboard__profiles">
          <MessageComponent mensaje={message[0]}/>
          <MessageComponent mensaje={message[1]}/>
          <MessageComponent mensaje={message[2]}/>
          <MessageComponent mensaje={message[3]}/>
          <MessageComponent mensaje={message[1]}/>
          <MessageComponent mensaje={message[2]}/>
          <MessageComponent mensaje={message[0]}/>
        </ul>
        <div class="navbar">
          <a href="#home"><img src="https://cdn.onlinewebfonts.com/svg/img_379147.png" alt=""></img></a>
          <a href="#call"><img src="https://cdn.onlinewebfonts.com/svg/img_167269.png" alt=""></img></a>
          <a href="#camera"><img src="https://maxcdn.icons8.com/Share/icon/p1em/Photo_Video/camera1600.png" alt=""></img></a>
          <a href="#settings"><img src="https://www.dlf.pt/png/big/35/358941_settings-icon-png.png" alt=""></img></a>
        </div>
    </div>
  );
}

export default App;
