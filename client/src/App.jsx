import React, { useEffect, useState } from 'react'
import RoutingComponents from './components/RoutingComponents.jsx'

function App() {  
  return(
      <RoutingComponents/>
  )
}

export default App; 



/*
  /*CHIAMATA JSON DA SERVER*/
  /*const [backendData, setBackendData] = useState([]);
  useEffect(() => { 
    fetch('http://localhost:3000/api/utenti') 
      .then(res => res.json()) 
      //.then(text => console.log(text)); 
      .then(data => { setBackendData(data); }) 
      .catch(error => console.error('Errore nella richiesta fetch:', error));
  },[])
*/