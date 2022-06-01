// import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './app/Component/nav/Login';
import Register from './app/Component/nav/Register';
import Logout from './app/Component/nav/Logout';
import Page from './app/Home/Page';
import Shop from './app/Component/nav/Shop';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exect path='/' element={<Page/>}/>
          <Route path='/Shop' element={<Shop/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Register' element={<Register/>}/>
          <Route path='/Logout' element={<Logout/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
