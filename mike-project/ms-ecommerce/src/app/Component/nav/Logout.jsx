import React from 'react';
import {useNavigate} from 'react-router-dom';
import urlApi from '../urlApi';
import axios from 'axios';
import Cookies from 'js-cookie';

//fitur logout
function Logout() {
   const navigate = useNavigate();

   const logout = () => {
      const token = Cookies.get('token')
      axios.get(`${urlApi}/auth/logout`, {
         header: {Authorization : `Bearer ${token}`}}
      )
      .then((res) => {
         if(!res.data.err){
           Cookies.remove('token');
           navigate('/Login')
         }
        })
       .catch(err => {
          console.log(err)
       })
      }
   
    return(
       <div>
          <button 
           onClick={logout} 
           style={{float: 'right', marginRight: 43, marginTop: '-26px', color: 'white', backgroundColor: '#5C5CFF', border: 'none'}}>Logout
          </button>
       </div>
    )
}

export default Logout;