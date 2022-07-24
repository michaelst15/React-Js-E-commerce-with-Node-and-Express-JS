import React from 'react';
import './Style.sass';
import logomc from './Img/logomc.png';
import { Card } from 'react-bootstrap';

const Login: React.FunctionComponent = () => {
    return(
        <div>
            <Card className='card-login'>
                <div className='title-login flex'>
                    <img src={logomc} className='logo-account'/>
                    <label className='text-white' style={{paddingLeft: '22px', paddingTop: '40px', fontWeight: 100}}>Login Account</label>
                </div>
                <div className='form'>
                    <label className='text-white' style={{paddingRight: '350px', paddingTop: '50px'}}>Email</label>
                    <br />
                    <input className="form-control me-2" type="email" placeholder="example: email_anda@gmail.com" aria-lable="Email" style={{width: '400px', marginLeft: '200px'}} />
                    <br />
                    <label className='text-white' style={{paddingRight: '210px', fontSize: '11px', marginTop: '-500px'}}><i>Harap masukkan email dengan benar</i></label>
                </div>
            </Card>
        </div>
    )
}

export default Login;