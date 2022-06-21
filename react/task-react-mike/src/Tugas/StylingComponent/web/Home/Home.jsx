import React from 'react';
import Card from '../Tambahan/Card';

function Home() {
   const title1 = 'MARKET ANALYST';
   const title2 = 'Data Market Analyst Global';

     return (
       <div className="container bg-white" id='Learn' style={{marginTop: 50}}>
         <h3 className="fw-bold fst-italic">{title1}</h3>
         <p> Manfaat pertama yang akan didapatkan perusahaan jika melakukan analisa pasar adalah dapat lebih memahami apa yang diinginkan oleh pelanggan.
          Perusahaan bisa mengetahui produk seperti apa yang menarik perhatian pelanggan dan kualitas seperti apa yang diharapkannya.         
          Semua informasi yang berkaitan dengan keinginan pelanggan bisa diketahui melalui analisa pasar ini.          
          Dengan lebih memahami pelanggan, perusahaan bisa menciptakan produk yang sesuai dengan apa yang diinginkan oleh pelanggannya.</p>
          <hr />                                                                               
          <h2 className="text-center mt-5">{title2}</h2>
        <div className="container bg-white d-flex text-center">
          <div className='row'>
            <div className='col-md-6'>
              <Card 
              judul="Direct Selling"
              isi="Direct selling atau penjualan langsung merupakan jenis strategi pemasaran di mana penjual akan menjual secara langsung produknya kepada konsumen. 
              Meskipun langsung, tetapi umumnya penjual tidak dilakukan di toko retail. Caranya Anda dapat melakukannya dengan door-to-door atau menemui konsumen secara langsung. 
              Anda sebagai pemasar bisa mendatangi rumah-rumah konsumen yang ditargetkan."
              /> 
            </div>
            <div className='col-md-6'>
              <Card
              judul="Earned Media"
              isi="Strategi pemasaran produk yang kedua adalah earned media. Berbeda dengan penjualan langsung, 
              jenis strategi ini justru dilakukan secara tidak langsung. Hal utama yang harus Anda lakukan untuk menerapkan strategi ini yakni membangun hubungan dan kepercayaan dengan masyarakat. 
              Sehingga, Anda perlu membangun brand dan membentuk image yang baik melalui media sosial."
              />
            </div>
          </div>
        </div>
          <div className="container bg-white d-flex text-center">
            <div className='row'>
                <div className='col-md-6'>
                  <Card
                  judul="Point of Purchase"
                  isi="Point of Purchase (POP) merupakan strategi marketing dengan cara menempatkan material marketing atau iklan di dekat produk yang sedang dipromosikan. 
                  Strategi ini sangat cocok diterapkan pada toko retail yang menjual berbagai macam produk. 
                  Menurut penelitian, sekitar 64% orang yang datang ke toko retail masih belum menentukan produk yang akan dibelinya."
                  />
                </div>
                <div className='col-md-6'>
                  <Card
                  judul="Internet Marketing"
                  isi="Jenis strategi pemasaran ini akan berjalan dengan lancar jika Anda dapat membuat konten yang menarik pembeli. 
                  Apalagi jika Anda dapat membuat brand tersendiri dalam media sosial, itu merupakan keuntungan yang sangat bagus. 
                  Oh ya semua jenis konten yang Anda buat juga merupakan aset berupa hak cipta, janganlah membuat konten dengan asal-asalan."
                  />
              </div>
            </div>
        </div>
      </div>
     )   
  }

export default Home;