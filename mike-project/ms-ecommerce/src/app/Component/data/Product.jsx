import React, {useState, useEffect} from 'react'; 
import '../../../App.css';
import {Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import urlApi from '../urlApi';
import axios from 'axios';
import Cookies from 'js-cookie';

const PAGE_PRODUCTS = 'products';
const PAGE_CARTS = 'carts'
const PAGE_DELIVERY = 'delivery';
const PAGE_BOOKING = 'booking;'


function Product() {
    const [cart, setCart] = useState([]); 
    const [value, setValue] = useState([]);
    const [nama, setNama] = useState([]);
    const [address, setAddress] = useState([]);
    const [user, setUser] = useState([]);
    const [detail, setDetail] = useState([]);
    const [kabupaten, setKabupaten] = useState([]);
    const [kecamatan, setKecamatan] = useState([]);
    const [kelurahan, setKelurahan] = useState([]);
    const [provinsi, setProvinsi] = useState([]);
    const [validation, setValidation] = useState([]);
    const [page, setPage] = useState(PAGE_PRODUCTS);
    const token = Cookies.get('token');
    const header = {headers : {Authorization: `${token}`}};
  
   //mendapatkan data cart
   const toCarts = async() => {
     await axios.get(`${urlApi}/api/carts`, header)  
      .then(response => {
            setValue(response.data)
        })
      .catch(err => {
            setValue(err.message)
        })
   }


   //mendapatkan data user
   const getUser = async() => {
     await axios.get(`${urlApi}/auth/me`, header)
      .then(response => {
        setUser(response.data)
      })
      .catch(err => {
        setUser(err.message)
      })
   }

   //mendapatkan data delivery address
   const deliveryAddress = async() => {
     let dataDelivery = {nama, user, detail, kabupaten, kecamatan, kelurahan, provinsi};
     await axios.post(`${urlApi}/api/delivery-address`, dataDelivery, header)
      .then(response => {
        setValidation(response.data)
      })
      .catch(err => {
        setValidation(err.message)
      })
   }

   const getDeliveryAddress = async() => {
    await axios.get(`${urlApi}/api/delivery-address`, header)
     .then(response => {
       setAddress(response.data)
     })
     .catch(err => {
       setAddress(err.message)
     })
  }

   //menambahkan(button addToCart) product ke keranjang belanja
    const addToCart = (item) => {
      let cart2 = [...cart]
      cart2.push({ ...item })
      value.map((i) => {
        if (i.product?._id === item.product?._id) {
          i.cart = true
        }
      })
      setCart(cart2)
  }

  //menghapus belanja
   const removeToCart = (item) => {
      let cart2 = cart.filter((value) => 
         value !== item
        )
      setCart(cart2)
    }

    //mengurangi jumlah qty belanja
    const increase = (item) => {
     let x = cart.map(i => {
       if(item.product?._id === i.product?._id) {
         i.qty += 1
       }
       return i
     })
     setCart(x)
    }

    //menambah jumlah qty belanja
    const decrease = (item) => {
      let x = cart.map(i => {
        if(item.product?._id === i.product?._id) {
          i.qty -= 1
        }
        return i
      })
      setCart(x)
    }

    //total belanja
    const total = () => {
      let x = 0 
      cart.map((i) => {
        x += i.price * i.qty
      })
      return x
    }

    //mengganti page/halaman
    const navigateTo = (nextPage) => {
      setPage(nextPage)
    }
   //list product
    const renderProducts = () => {
      return(
        <div className='Product'>
          <h3 className='title text-center mt-5'>Product</h3>
            <div className='container'>
              <Row md='3'>
              {value?.map( (data, Index) => {
                    return( 
                      <Col>
                        <div key={Index}>
                          <div className='Item'>
                            <div className='Item-Product'>
                              <img 
                                src={`${urlApi}/images/${data.product?.image_url}`} 
                                style={{height: '120px', marginLeft: '130px', marginTop: '10px', marginBottom: '25px'}}>
                              </img> 
                                <div className='item-description mx-5'>
                                  <h5 style={{textAlign: 'center'}}>{data.product?.name}</h5>
                                    <p style={{fontSize: '14px', marginBottom: '20px'}}>{data.product?.description}</p>
                                      <div style={{marginTop: '15px', textAlign: 'center'}}>
                                        <p className='fs-5'>Rp.{data.product?.price}</p>
                                          <button 
                                          onClick={() => addToCart(data)}>
                                            Add to cart
                                          </button>
                                      </div>
                                   </div>
                                </div>
                             </div>
                           </div> 
                        </Col>                
                        )})};  
                    </Row> 
            </div> 
        </div>
      )}


//list belanja
const renderCarts = () => {
  return(
    <div>
          <div className='row mt-5'>
            <table className="table  text-center">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Product</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Remove</th>
                </tr>
              </thead>
              <tbody>
                {
                  cart.map((i, index) => (
                    < tr key={i.id}>
                      <th scope="row">{index + 1}</th>
                      <th scope="row">
                        <img 
                        src={`${urlApi}/images/${i.product?.image_url}`} 
                        style={{ width: '4rem' }} />
                      </th>
                        <td>
                          {i.product?.name}
                        </td>
                        <td>
                          Rp.{i.product?.price}
                        </td>
                        <td>
                        <button
                          style={{marginRight: '8px', backgroundColor: '#25140f', color: 'white'}}
                          onClick={() => decrease(i)}
                          className="btn btn-sm"
                        >
                          -
                          </button>
                        {i.qty}
                        <button
                          style={{marginLeft: '8px', backgroundColor: '#25140f', color: 'white'}}
                          onClick={() => increase(i)}
                          className="btn btn-sm"
                        >
                          +
                          </button>
                      </td>

                      <td>
                        <button 
                        onClick={() => removeToCart(i)} 
                        style={{backgroundColor: '#25140f', color: 'white'}}>
                          Remove
                          </button>
                      </td >
                    </tr >
                  ))
                }
              </tbody>
            </table>
          </div>
          <div className="row" style={{marginBottom: '100px'}}>
            <div className="col text-center">
              <h4>TOTAL: Rp.{total()}</h4>
            </div>
          </div>
        </div >
     )}  
  
     //membuat alamat
     const renderDelivery = () => {
       return(
         <div>
           <Container style={{marginTop: '80px', marginBottom: '100px'}}>
             <h3 style={{fontWeight: 'bold'}}>Delivery Address</h3>
              <form>
                <table className='d-flex'>
                <div className='col-md-5'>
                <div className='nama mt-4'>
                  <th>Nama :</th>
                  <br/>
                  <input 
                  name='name' 
                  type='text' 
                  placeholder='Nama Anda' 
                  value={nama} 
                  onChange={(e) => setNama(e.target.value)} 
                  style={{width: '350px'}}/>
                </div>
                <div className='Detail-alamat mt-5'>
                  <th>Detail Alamat :</th>
                  <br/>
                  <textarea 
                  name='detail' 
                  type='text' 
                  placeholder='Detail Alamat Anda' 
                  value={detail} 
                  onChange={(e) => setDetail(e.target.value)} 
                  style={{width: '350px', height: '100px'}}/>
                </div>
                {validation.error === 1 ? (<p className='mt-1 mb-1 mx-4'>{validation.message}</p>) : ''}
                <button onClick={(e) => deliveryAddress(e)} className='btn btn-dark mt-4'>Simpan</button>
                </div>
                <div className='col md-2' style={{marginLeft: '200px', marginTop: '-9px'}}>
                <div className='provinsi mt-4'>
                  <th>Provinsi :</th>
                  <br/>
                  <input 
                  name='provinsi' 
                  type='text' 
                  placeholder='Provinsi Anda' 
                  value={provinsi} 
                  onChange={(e) => setProvinsi(e.target.value)} 
                  style={{width: '350px'}}/>
                </div>
                <div className='kecamatan mt-4'>
                  <th>Kecamatan :</th>
                  <br/>
                  <input 
                  name='kecamatan' 
                  type='text' 
                  placeholder='Kecamatan Anda' 
                  value={kecamatan} 
                  onChange={(e) => setKecamatan(e.target.value)} 
                  style={{width: '350px'}}/>
                </div>
                <div className='kelurahan mt-4'>
                  <th>kelurahan :</th>
                  <br/>
                  <input 
                  name='kelurahan' 
                  type='text' 
                  placeholder='Kelurahan Anda' 
                  value={kelurahan} 
                  onChange={(e) => setKelurahan(e.target.value)} 
                  style={{width: '350px'}}/>
                </div>
                <div className='kabupaten mt-4'>
                  <th>Kabupaten :</th>
                  <br/>
                  <input 
                  name='kabupaten' 
                  type='text' 
                  placeholder='Kabupaten Anda' 
                  value={kabupaten} 
                  onChange={(e) => setKabupaten(e.target.value)} 
                  style={{width: '350px'}}/>
                </div>
                </div>
               </table>
              </form>
           </Container>
         </div>
       )
     }

     const renderBooking = () => {
       return(
         <div>
            {address.data?.map((data) => {
              return(
                <Container style={{marginTop: '80px', marginBottom: '100px'}}>
                  <div className='d-flex'>
                    <div className='col-md-2'>
                      <label>Nama: {data.nama}</label>
                      <label>Alamat: {data.detail}</label>
                      <label>Provinsi: {data.provinsi}</label>
                      <label>Kecamatan: {data.kecamatan}</label>
                      <label>Kelurahan: {data.kelurahan}</label>
                      <label>Kabupaten: {data.kabupaten}</label>
                    </div>
                  </div>
                </Container>
              )
            })}
         </div>
       )
     }

  useEffect(() => {
    getUser()
    getDeliveryAddress()
    toCarts()
  }, []);
   

  return(
    <div>
        <div style={{backgroundColor: '#25140f', height: '70px'}}>
            <h3 style={{paddingTop: '14px', color: 'white', marginLeft: '20px'}}>Shopping Cart</h3>
            <h3 style={{color: 'white', marginTop: '-40px', textAlign: 'center'}}>MIKe.Store</h3>
            <div style={{marginTop: '-2px', marginRight: '-30px'}}>
              <i 
                className="fa-solid fa-envelope" 
                onClick={() => navigateTo(PAGE_BOOKING)} 
                style={{color: 'white', float: 'right', marginTop: '-30px', marginRight: '340px', cursor: 'pointer'}}/>
              <i 
                className="fa-solid fa-location-dot" 
                onClick={() => navigateTo(PAGE_DELIVERY)} 
                style={{color: 'white', float: 'right', marginTop: '-31px', marginRight: '290px', cursor: 'pointer'}}/>
              <i 
                className="fa-solid fa-bag-shopping" 
                onClick={() => navigateTo(PAGE_PRODUCTS)} 
                style={{float: 'Right', marginRight: '180px', marginTop: '-31px', color: 'white', cursor: 'pointer'}}/>
              <i 
                className="fa-solid fa-cart-shopping" 
                onClick={() => navigateTo(PAGE_CARTS)}  
                style={{float: 'Right', marginRight: '240px', marginTop: '-31px', color: 'white', cursor: 'pointer'}}/>
            <div style={{float: 'right', marginRight: '232px', marginTop: '-45px', color: 'white', width: '0px'}}>
              {cart.length}
            </div>
              <Link to='/'>
                <i 
                className="fa-solid fa-arrow-left" 
                style={{float: 'right', marginRight: '82px', marginTop: '-31px', color: 'white'}}/>
              </Link>
            </div>
        </div>
          {/* pergantian page */}
          <Container>
            {page === PAGE_PRODUCTS && renderProducts()}
            {page === PAGE_CARTS && renderCarts()}
            {page === PAGE_DELIVERY && renderDelivery()}
            {page === PAGE_BOOKING && renderBooking()}
          </Container>

        <div className='footer-cart'>
          <h2 className='title-Footer' style={{marginLeft: '590px', marginTop: '40px', fontFamily: 'Quattrocento, serif'}}>MIKe.Store</h2>
          <div style={{marginLeft: '610px', marginTop: '23px'}}>
              <i className="fa-brands fa-facebook mx-md-2" style={{cursor: 'pointer'}}></i>
              <i className="fa-brands fa-twitter mx-md-2" style={{cursor: 'pointer'}}></i>
              <i className="fa-brands fa-youtube mx-md-2" style={{cursor: 'pointer'}}></i>
              <i className="fa-brands fa-instagram mx-md-2" style={{cursor: 'pointer'}}></i>
          </div>
          <div className='text-center mt-4'>
            <p>Powerfull by Market Swatch</p>
            <p>&copy;Copyright Build website 2022</p>
          </div>
        </div>
    </div>
)};
                   

export default Product;