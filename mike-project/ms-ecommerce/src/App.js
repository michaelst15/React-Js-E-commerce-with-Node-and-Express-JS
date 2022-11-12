// import './App.css';
import React from 'react';
// import axios from 'axios';
// import urlApi from './app/Component/urlApi';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Login from './app/Component/nav/Login';
import Register from './app/Component/nav/Register';
import Logout from './app/Component/nav/Logout';
import Page from './app/Home/Page';
import Shop from './app/Component/nav/Shop';
// import Cookies from 'js-cookie';

function App() {
//   const token = Cookies.get('token')
//   const header = {header: {Authorization: `${token}`}}
//   const navigate = useNavigate();
//   const [cek, setCek] = useState([]);

//   const authMe = () => {
//   axios.get(`${urlApi}/auth/me`, header)
//   .then(response => {
//   if(!response){
//     setCek(response.data)
//     navigate('/Login')
//   } else {
//     console.log('err.message')
//   }
// })
//   .catch(err => {
//    setCek(response.data)
//   })
// }

//   useEffect(() => {
//     authMe()
//   }, []);

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
