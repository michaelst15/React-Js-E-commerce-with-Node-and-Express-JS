import React from 'react';
import {Card} from 'react-bootstrap';
import '../../App.css';
import { Link } from 'react-router-dom';
import icon from '../img/icon.png';
import Logout from '../Component/nav/Logout';

function Page() {
    return(
     <div>
       <div className='block-one'>
         <div className='d-flex'>          
            <label className='mt-3 text-white'>MIKe.Store</label>                                                                       
         </div>
          <Link to='/Shop'><div style={{float: 'right', marginRight: 183, marginTop: '-25px', color: 'white'}}>Shop</div></Link>
          <Link to='/Login'><div style={{float: 'right', marginRight: 120, marginTop: '-25px', color: 'white'}}>Login</div></Link>
          <Logout/>
         </div>

        <div className='block-two'>
          <div className='article-one w-50' style={{backgroundColor: '#5C5CFF', color: 'white', height: '450px'}}>
             <div style={{paddingTop: '75px', width: '400px', marginLeft: '35px', fontFamily: 'Abril Fatface cursive'}}>
               <h3>MIKe.Store</h3>
                  <p>Selamat datang di MIKe.Store. Disini ada dapat menemukan berbagai jenis jam tangan yang anda suka dengan 
                    berbagai jenis dan bentuk, yang memiliki tampilan sesuai dengan selera anda. Dan anda bisa mendapatkannya dengan menambahkannya ke keraanjang 
                    belanja. Semoga anda dapat puas dengan kualitas jam tangan yang telah di sediakan.
                  </p>
                  <button style={{marginTop: '20px',backgroundColor: '#003CB6', border: 'none', height: '50px', width: '100px', borderRadius: '10px', color: 'white'}}>Learn</button>
                  </div>
                </div>
                <span className='image'>
                  <img src={icon} style={{height: "530px", width: "550px", borderRadius: '20px', marginTop: '-490px'}}/>
                </span>
                <div className='article-two w-50' style={{float: 'right', backgroundColor: '#004CE6', color: 'white', marginTop: '-489px', height: '450px'}}>
                  <p id='paragrafImage'>Time Is Very Important For Life</p>
                </div>
              </div>

          <div className='block-four'>
            <div className='about'>
              <div className="container bg-white" style={{marginTop: '-20px'}}>
                <h3 className="fw-bold fst-italic mb-4">MIKe.Store</h3>
                <p className='mb-5'>Anda dapat menemukan koleksi jam tangan yang bervariasi dan dengan gaya beragam yang anda sesuaikan 
                dengan selera anda sendiri, mulai dari jam tangan moder, classic, hingga sporty. Anda dengan sepuasnya dapat memilih, berbagai konsep yang telah
                disediakan dan dengan beberapa fitur pada jam tangan, hal ini dapat mempengaruhi tingkat kepuasan anda dalam memakainya
                . Saya telah melakukan riset dengan baik, sesuai pasar konsumen yang berlaku beberapa dekade. Dan dibawah anda dapat melihat informasi detail 
                mengaenai beberapa jam tangan.</p>
                <hr />                                                                               
                <h2 className="text-center mt-5 mb-5">MIKe.Store Collection</h2>
              <div className="container bg-white d-flex text-center">
                <div className='row'>
                  <div className='col-md-6'>
                    <Card style={{backgroundColor: '#004CE6', color: 'white', borderRadius: '20px'}}>
                    <h3 style={{marginTop: '7px'}}>G-Shock</h3>
                    <p>G-Shock sebenarnya adalah jam tangan yang dibuat oleh Casio, namun didesain dengan model yang lebih kasual dan sporty. 
                       Buat kamu para pria yang suka jalan-jalan jauh, menyelam ke laut, naik gunung, dan aktivitas-aktivitas berat lainnya, G-Shock adalah merk jam tangan terkenal buat kamu.
                       Selain modelnya yang keren dan bikin kamu terlihat maskulin, Jam tangan G-Shock tersedia dalam berbagai macam warna. 
                       Warna-warna seperti hitam, cokelat tua hingga biru navy bisa menjadi pilihan buat kamu yang ingin tampil macho!
                    </p>
                    </Card> 
                  </div>
                  <div className='col-md-6'>
                    <Card style={{backgroundColor: '#004CE6', color: 'white', borderRadius: '20px'}}>
                    <h3 style={{marginTop: '7px'}}>Casio</h3>
                    <p>Diantara merk jam tangan lainnya, mungkin jam tangan pria Casio merupakan yang paling unik dan anti-mainstream. 
                       Karena Casio memiliki berbagai macam tipe jam tangan yang unik dan bisa menjadi pilihan buat kamu para pria yang ingin tampil beda. 
                       Casio memiliki jam tangan seperti kalkulator. Tidak hanya itu, Casio juga memiliki jam tangan video games di dalamnya, 
                       sehingga kamu bisa melihat waktu dan juga bermain games sekaligus dengan jam tangan itu!
                       Sama seperti G-Shock, jam tangan Casio original juga memiliki varian warna yang luas.
                    </p>
                    </Card>
                  </div>
                </div>
              </div>
                <div className="container bg-white d-flex text-center mt-5">
                  <div className='row'>
                      <div className='col-md-6'>
                        <Card style={{backgroundColor: '#004CE6', color: 'white', borderRadius: '20px'}}>
                        <h3 style={{marginTop: '7px'}}>Fossil</h3>
                        <p>Fossil adalah merk jam tangan buat kamu yang ingin tampil elegan dan berkelas dengan sentuhan klasik yang tentu saja menambah kesan vintage pada diri kamu. 
                           Terutama jam tangan Fossil yang terbuat dari kulit asli berwarna cokelat. Kalau kamu memakai jam tangan Fossil yang talinya terbuat dari kulit, dijamin, 
                           seiring menuanya kulit jam tangan kamu, kamu akan terlihat lebih elegan, karena aksesori apapun yang terbuat dari kulit asli cenderung membuat kaum pria terlihat lebih manly.
                        </p>
                        </Card>
                      </div>
                      <div className='col-md-6'>
                        <Card style={{backgroundColor: '#004CE6', color: 'white', borderRadius: '20px'}}>
                        <h3 style={{marginTop: '7px'}}>Daniel Wellington</h3>
                        <p>Buat kamu yang ingin tampil dengan jam tangan yang lebih mencolok, ada merk jam tangan pria bernama Daniel Wellington atau yang lebih dikenal dengan sebutan DW. 
                           Jam tangan pria keren ini merupakan salah satu jam tangan yang talinya terbuat dari bahan yang halus serta berwarna-warni, seperti kombinasi merah, putih dan biru atau satu warna saja.
                           Selain itu, angka yang digunakan pada tubuh jam tangannya menggunakan angka romawi yang tentu saja menambah kesan vintage.
                        </p>
                        </Card>
                    </div>
                  </div>
              </div>
            </div>
         </div>
        </div>

      <div className='block-five'>
        <h2 className='title-Footer' style={{marginLeft: '590px', marginTop: '40px'}}>MIKe.Store</h2>
         <div style={{marginLeft: '610px', marginTop: '23px'}}>
            <i className="fa-brands fa-facebook mx-md-2"></i>
            <i className="fa-brands fa-twitter mx-md-2"></i>
            <i className="fa-brands fa-youtube mx-md-2"></i>
            <i className="fa-brands fa-instagram mx-md-2"></i>
         </div>
         <div className='text-center mt-4'>
           <p>Powerfull by Market Swatch</p>
           <p>&copy;Copyright Build website 2022</p>
         </div>
       </div>
     </div>
)};

export default Page;