import React, {useContext, useEffect} from 'react';
import './App.css';
import Footer from './Footer';
import NavBar from './NavBar';
import WordOfTheDay from './WordOfTheDay';
import { Context } from './Context'

function App() {
  let {value, setvalue} = useContext(Context)
  
  return (
    <div className="App">
      <NavBar/>
      <WordOfTheDay/>
      <Footer/>
    </div>
  );
}

export default App;
