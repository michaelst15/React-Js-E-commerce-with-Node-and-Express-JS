import React from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import urlApi from '../urlApi';

//fitur register
function Register() {
    const [full_name, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validation, setvalidation] = useState([])
    const navigate = useNavigate();

    let body = {full_name, email, password};

    const handlerSubmit = async(e) => {
        e.preventDefault();

        await axios.post(`${urlApi}/auth/register`, body)
        .then(response => {
           console.log(response.data)

           if(response.data){
               navigate('/Login')
           } else {
               return 'error';
           }
        })
        .catch(err => {
            setvalidation(err)
        })
    }

    return(
        <div>
            <Card className='register'>
              <form>
                <h5 className='fw-bold mx-3 my-3'>Daftar</h5>
                <label className='mt-2'>nama</label>
                <input id='input-login' name='text' type='text' value={full_name} onChange={e => setFullName(e.target.value)}/>
                <label className='mt-2'>email</label>
                <input id='input-login' name='email' type='email' value={email} onChange={e => setEmail(e.target.value)}/>
                <label className='mt-4'>kata sandi</label>
                <input id='input-login' name='password' type='password' value={password} onChange={e => setPassword(e.target.value)} />
                {validation.error === 1 ? (<p className='mt-2 text-sm text-red-400'>{validation.message}</p>) : ''}
                <button className='btn btn-dark w-75 mt-5' style={{marginLeft: 40}} type='submit' onClick={handlerSubmit}>Daftar</button>
               <Link to='/Login'><div style={{marginTop: 30, textAlign: 'center'}}>Sudah punya akun</div></Link>
              </form>
            </Card>
        </div>
    )
}

export default Register;