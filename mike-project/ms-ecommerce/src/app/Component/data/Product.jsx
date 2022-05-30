import React, {useState, useEffect} from 'react'; 
import {Container, Row, Col} from 'react-bootstrap';
import urlApi from '../urlApi';
// import Card from '../Card';
import axios from 'axios';
// import {useNavigate} from 'react-router-dom';
import Cookies from 'js-cookie';
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';


function Product(){
    // const navigate = useNavigate();
    const [cart, setCart] = useState([]); 
    // const [cartItem, setCartItem] = useState([]);
    // const Navigate = useNavigate();
    const [value, setValue] = useState([]);
    // console.log(value)
    // console.log(value)
    // const get = () => {
    //     axios.get(`${urlApi}/api/products`)  
    //       .then(response => {
    //           console.log(response.data)
    //       })
    //       .catch(err => {
    //           console.log(err.message)
    //       })
    // }

   const toCarts = () => {
     const token = Cookies.get('token');
      //  console.log(token)
      axios.get(`${urlApi}/api/carts`, {
             headers: {Authorization : `${token}`}}, 
         )  
      .then(response => {
            setValue(response.data)
            // console.log(response.data)
        })
      .catch(err => {
            setValue(err.message)
        })
   }

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
      // let cart2 = [...cart]
      // value.map(i => {
      // if(cart2.push({...item, i: item.product?._id === item.product?._id ? item.i + 1 : item.i})){
      //   item.cart = true
      // }
      // })
      // setCart(cart2)

    const removeToCart = (item) => {
      let cart2 = cart.filter((i) => {
        cart.map((i) => {
          if(i.id === item.id) {
            i.cart = false
          }
        })
        console.log(i)
      })
      setCart(cart2)
    }

    const increase = (cart_id) => {
      setCart(cart =>
        cart.map( (item) => 
            cart_id === item.id ? {...item, product_qty: item.product_qty + 1} : item
          )
        )
    }

    const decrease = (cart_id) => {
      setCart(cart =>
        cart.map( (item) => 
            cart_id === item.id ? {...item, product_qty: item.product_qty - 1} : item
          )
        )
    }

    const total = () => {
      let x = 0 
      cart.map((i) => {
        x += i.price * i.qty
      })
      return x
    }

  

  useEffect(() => {
    // get()
    toCarts()
  }, []);


  return(
  <div>
    <Container>
      <div className='Product'>
        <h3 className='title text-center mt-5'>Product</h3>
          <div className='container'>
            <Row md='3'>
            {value.map( (data, Index) => {
                   return( 
                    <Col>
                      <div key={Index}>
                         <div className='Item'>
                            <div className='Item-Product'>
                                <img src={`${urlApi}/images/${data.product?.image_url}`} style={{height: '120px', marginLeft: '130px', marginTop: '10px', marginBottom: '25px'}}></img> 
                                <div className='item-description mx-5'>
                                    <h5 style={{textAlign: 'center'}}>{data.product?.name}</h5>
                                    <p style={{fontSize: '14px', marginBottom: '20px'}}>{data.product?.description}</p>
                                      <div className='d-flex bg-dark text-white' style={{width: '90px', borderRadius: '8px'}}>
                                        <i className="fa-solid fa-tag" style={{paddingTop: '12px', paddingLeft: '14px', paddingRight: '7px'}}></i>
                                        <p className='mx-2' style={{paddingTop: '9px'}}>{data.product?.tags}</p>
                                      </div>
                                      <div style={{marginTop: '15px', textAlign: 'center'}}>
                                        <p className='fs-5'>Rp.{data.product?.price}</p>
                                              <button className='btn btn-primary' onClick={() => addToCart()}>
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
      </Container>
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
                    <img src={`${urlApi}/images/${i.product?.image_url}`} style={{ width: '4rem' }} />
                  </th>
                  <td>{i.product?.name}</td>
                  <td>
                    Rp.{i.product?.price}
                  </td>
                  <td>
                    <button
                      onClick={() => decrease(i)}
                      className="btn btn-primary btn-sm"
                    >
                      -
                      </button>
                    {i.qty}
                    <button
                      onClick={() => increase(i)}

                      className="btn btn-primary btn-sm"
                      size="sm"
                    >
                      +
                      </button>
                  </td>

                  <td>
                    <button onClick={() => removeToCart(i)} className="btn btn-danger">
                      Remove
                      </button>
                  </td >
                </tr >
              ))
            }
          </tbody>
        </table>
      </div>
      <div className="row">
        <div className="col text-center">
          <h4>TOTAL: Rp.{total()}</h4>
        </div>
      </div>
    </div >
      </div>
)};
                   

export default Product;