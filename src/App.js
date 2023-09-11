import './App.css';
import Mensaje from './Mensaje';
import Description from './Description';


function App() {
  return (
    <div className="App">
      <Mensaje  color= 'red' message = 'Estamos trabajando '></Mensaje>
      <Mensaje color = 'blue' message = 'en curso react'></Mensaje>
      <br></br>
      <Description></Description>
    </div>
  );
}

export default App;
