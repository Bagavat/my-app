import logo from './logo.svg';
//import './App.css';
import Te from './Te';
import Login from "./Login";
import Register from "./Register";
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Te/>}/>
      <Route path='/Te' element={<Te/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Register' element={<Register/>}/>
    </Routes>
    </BrowserRouter>
 
  );
}

export default App;
