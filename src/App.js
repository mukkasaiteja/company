import './App.css';
import Retrieve from './Components/Retrive';
import Interface from './Components/Interface';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Nav from './Components/Nav';



function App() {
  return (
    <div className="App">
      <Nav/>
  
      <div>
      
      <BrowserRouter>
     <Routes>
      <Route path='/' element={<Interface/>}/>
      <Route path='/Retrieve' element={<Retrieve/>}/>
     </Routes>
     </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

