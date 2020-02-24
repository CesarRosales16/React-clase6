import React, {useState} from 'react';
import './App.css';
import {Login} from './Components/Login/Login';
import {Welcome} from './Components/Welcome/Welcome';

const userChido = {
  username: "CesarRosales16",
  password: "12345"
}

function App() {
  const [logged, setLogged] = useState(false);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (event) => {
      event.preventDefault();
      if(user===userChido.username && password===userChido.password){
        setLogged(true);

      }
  }

  const Screen = logged?<Welcome username={userChido.username}/>:<Login submitHandler={submitHandler} setUser={setUser} setPassword={setPassword}/>;

  /* 3 formas de hacer esto:
    * 1. Operador ternario dentro del return (hechizo)
    * 2. Componente Banner con operador ternario
    *     //const Banner = logged?<h1>Hola usuario loggeado</h1>:<h1>Hola usuario NO loggeado</h1>;
    * 3. Short circuit
   */


  return (
    <div className="App">
    {Screen}
    </div>
  );
}

export default App;
