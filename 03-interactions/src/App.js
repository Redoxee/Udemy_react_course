import {useState} from 'react';

import './App.css';
import AnimalShow from './AnimalShow';

function getRandomAnimal() {
  const animals = ['bird','cat', 'cow', 'dog', 'gator', 'horse'];
  return animals[Math.floor(Math.random() * animals.length)];
}

function App(){
  const [values, addValue] = useState([]);

  const rederedAnimals = values.map((value, index)=> {
    return <AnimalShow value={value} key={index}/>;
  });

  return <div className='app'>
    <button onClick={()=>{addValue([...values, getRandomAnimal()]);}}>Add</button>
    <div className='animal-list'>
      {rederedAnimals}
    </div>
  </div>
}

export default App;