import "./App.css";
import React, { useEffect , useState} from 'react';

function App() {
  const [saludo, setSaludo ] = useState ('')
  useEffect ( () => {
    setSaludo('¡Hello World! 😱')
  },[])
  return (
    <div className="container">
      <h1>Hello World App</h1>
      <p>{saludo}</p>
    </div>
  );
}

export default App;
