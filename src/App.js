import React from 'react';
import image from './img/pople.svg'

import './App.css';

function App() {
  const [comentario, setcomentario] = React.useState()
  const [todososcomentarios, settodosossetcomentarios] = React.useState([])

  function digiteinotextarea(eventodotextarea){
    setcomentario(eventodotextarea.target.value)
  }

  function cliqueinobotao(){
     const todososcomentariosanteriores = [...todososcomentarios, comentario]
    settodosossetcomentarios(todososcomentariosanteriores)
  }

  return (
    <div >
      <img src={image} alt="imagem-pessoas" />
      <textarea onChange={digiteinotextarea}></textarea>
      <button onClick={cliqueinobotao}>Comentar</button>

      <ul>
        {todososcomentarios.map( Coment => (
          <li key={Coment}>{Coment}</li>
        
        ))}
      </ul>
      </div>
  );
}

export default App;
