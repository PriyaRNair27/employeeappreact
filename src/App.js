import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Addemp from './Components/Addemp';
import Search from './Components/Search';
import Header from './Components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Addemp/>}/>
        <Route path="/search" exact element={<Search/>}/>
        <Route path="/" exact element/>
        </Routes></BrowserRouter>
    


    </div>
  );
}

export default App;
