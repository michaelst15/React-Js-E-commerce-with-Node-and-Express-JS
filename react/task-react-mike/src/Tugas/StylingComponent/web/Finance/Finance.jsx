import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import './Styleweb.css';

function Finance() {
    const [data, setData] = useState([]);                                                         
    
  const Api = () => {                           
    axios.get(
       `https://newsapi.org/v2/everything?q=finance&sortBy=publishedAt&apiKey=1e4d7358c26843d98c618391469576e2`
    ) 
        .then(response => {
            setData(response.data.articles);
        })  
        .catch(err => {
            setData(err);                
        })          
  }                                                              

   useEffect(() => {
    Api();
   }, []);
    
        
   return (
        <div>
          <Container className='bg-white'>
          <h2 className='text-center mt-5 fw-bold'><i>Finance</i></h2>
            <div className='mt-5'>
             <Row md='4'>
            {data.map( (data, index ) => {
                return(
                   <Col>
                     <div key={index} className='container bg-dark text-white w-100' style={{height: '400px'}}>
                       <img src={data.urlToImage} className='mt-3 mx-2' style={{width: '200px', height: '170px'}}></img>
                            <div className='artikel'>
                            <div style={{fontSize: '11px', fontWeight: 'bold'}}>{data.title}</div>
                                <div>{data.publishedAt}</div>
                                <div style={{fontSize: '9px'}}>{data.description}</div>
                            </div>
                       <a href={data.url} className='btn btn-primary mt-2'>Read more</a>
                      </div>
                   </Col>
                       )
                    
                    })
                    }
              </Row>
            </div>
            </Container>
        </div>
           )
}
export default Finance;