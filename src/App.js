import logo from './logo.svg';
import './App.css';
import { css } from '@emotion/react';
import Header from './Componentes/Header';
import Section from './Componentes/Section';
import Carrito from './Componentes/Carrito';
import React  from 'react';
import { useState, useContext } from 'react';

export const userContext = React.createContext();

function App() {

  const [click, setClick] = useState(false);

  const askState = (state) => {
    console.log(state)
    console.log(typeof state)
    setClick(state)
  }

  const askState2 = (state2) => {
    console.log(state2)
    console.log(typeof state2)
    setClick(state2)
  }

  return (
    <userContext.Provider value={click}>
      <Header state = {askState} stateinit = {askState2}/>
      {click ? <Section></Section> : <Carrito></Carrito>}
      
    </userContext.Provider>
  );
}

export default App;
