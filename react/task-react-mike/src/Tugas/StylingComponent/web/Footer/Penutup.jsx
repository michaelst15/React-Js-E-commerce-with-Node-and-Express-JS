import React from 'react';

function Penutup() {                          
    return (
        <div className="footer" style={{borderTop: '1px solid black', marginTop: '20px'}}>
            <footer className='mt-5 mb-2 w-100' style={{ height: 180, position: "relative", bottom: -9 }}>
                <h6 className="text-black text-center pt-2">Pengembangan pemasaran secara global dan multifungional &copy;MichaelSuparlanTobing</h6>
                {/* <div style={{marginLeft: '610px', marginTop: '23px'}}>
                  <i className="fa-brands fa-facebook mx-md-2"></i>
                  <i className="fa-brands fa-twitter mx-md-2"></i>
                  <i className="fa-brands fa-youtube mx-md-2"></i>
                  <i className="fa-brands fa-instagram mx-md-2"></i>
                </div> */}
                <div className='text-center mt-4'>
                  <p>Powerfull by Mike Portal </p>
                  <p>&copy;Copyright Build website 2022</p>
                </div>
            </footer>
        </div>
    )
}

export default Penutup;