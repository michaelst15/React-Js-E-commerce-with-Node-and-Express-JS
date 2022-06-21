import React from 'react';
import PatahHati from './Img/PatahHati.jpeg';

const Image = ({img}) => {
  return (
      <div> 
          <img className="w-100" style={{height: '630px'}} src={img}>
          </img>
      </div> 
  )
}

class FromRegistrasi extends React.Component {

    state = {
      email: '',
      password: '',
      JenisPatahHati: '',
      MotivasiMoveOn: ''
    }

    handleSubmit = () => {
     alert (`
      email: ${this.state.email},
      password: ${this.state.password},
      JenisPatahHati: ${this.state.JenisPatahHati},
      MotivasiMoveOn: ${this.state.MotivasiMoveOn}
      `)
    }

    render() {
        const Styling = {
        fontFamily: 'italic',
        color: 'grey',
        marginLeft: '100px',
        marginTop: '-632px'
    } 

    return (
        <div>
            <Image img={PatahHati} />
            <form style={Styling} onSubmit={this.handleSubmit}>
                    <h2>Form Registrasi Patah Hati</h2>
                  <br />
                <label>Email Kamu :
                  <br />
                    <input required='true' name='email' type='email' onChange={value => this.setState({email: value.target.value})}/>
                </label>  
                  <br />
                  <br />
                  <label>Password Kamu :
                  <br /> 
                    <input required='true' name='password' type='password' onChange={value => this.setState({password: value.target.value})}/>
                </label> 
                  <br />
                  <br />
                <label>Jenis Patah Hati :
                  <br /> 
                    <select required='true' name='JenisPatahHati' id='pilihan' onChange={value => this.setState({JenisPatahHati: value.target.value})}>
                        <option className='text-center'>Pilihan</option>
                        <option>Di Tinggal Karna Orang Ketiga</option>
                        <option>Di Tinggal Tanpa Alasan</option>
                        <option>Di Tinggal Karna Materi</option>
                        <option>Di Tinggal Karna Restu</option>
                        <option>Di Tinggal Karna Jarak</option>
                        <option>Di Tinggal Karna Pekerjaan</option>
                        <option>Di Tinggal Karna Sudut Pandang</option>
                        <option>Di Tinggal Karna Beda Keyakinan</option>
                    </select>
                </label>
                  <br />
                  <br />
                <label>Motivasi Untuk Move On : 
                  <br />
                    <textarea required='true' name='MotivasiMoveOn' id='textArea' cols='40' rows='5' onChange={value => this.setState({MotivasiMoveOn: value.target.value})}></textarea>
                </label>
                  <br />
                  <br />
                <button required='true' type='submit' className='btn bg-dark text-white'>Sign In</button>
                  <br />
                  <br />
                    <p style={{marginTop: '-10px'}}>"Cinta itu sulit dimengerti dan dipahami<br/>dikala kita mencintai seseorang yang sangat<br/>
                            kita sayangi tetapi dia hanya bertahan untuk sesaat"
                        <p style={{marginLeft: '110px'}}>~Mike~</p>
                    </p>       
            </form>
        </div>
        )
    }
}
export default FromRegistrasi;