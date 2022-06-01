import React from 'react';
import axios from 'axios';
import '../../../App.css';
import urlApi from '../urlApi';
import {Link, useNavigate} from 'react-router-dom';
import {Card} from 'react-bootstrap';
import { useState } from 'react';
import Cookies from 'js-cookie';

//fitur login
function Login(){
    const navigate = useNavigate();
    const [validation, setValidation] = useState([]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handlerSubmit = (e) => {
      let login = {email, password};
      e.preventDefault();
      
        axios.post(`${urlApi}/auth/login`, login)
            .then(response => {
              setValidation(response.data)
              console.log(response)
                Cookies.set('token', response.data.token)
              if(!response.data.error){
                navigate('/')
              } else {
                Cookies.remove('token')
              }
            })
            .catch(err => {
              console.log(err)
            })
          }

    
    return(
        <div>
            <Card className='login'>
              <form>
                <h5 className='fw-bold mx-3 my-3 mt-5'>Masuk</h5>
                <label className='mt-2'>email</label>
                <input 
                id='input-login' 
                name='email' 
                type='email' 
                value={email} 
                onChange={e => setEmail(e.target.value)}/>
                <label className='mt-4'>kata sandi</label>
                <input 
                id='input-login' 
                name='password' 
                type='password' 
                value={password} 
                onChange={e => setPassword(e.target.value)} />
                {validation.error === 1 ? (<p className='mt-1 mb-1 mx-4'>{validation.message}</p>) : ''}
                <button 
                className='btn btn-dark w-75 mt-3 mb-3' 
                style={{marginLeft: 40}} type='submit' onClick={handlerSubmit}>Login
                </button>
                <div className='text-center'>
              <Link to='/Register'>Belum punya akun</Link>
                </div>
              </form>
            </Card>
        </div>
    )
}
export default Login;