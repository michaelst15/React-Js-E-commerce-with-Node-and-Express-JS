import React, {useEffect, useState} from 'react';
import '../App.css';
import '../../node_modules/aos/dist/aos.css';
import {Container, Navbar, Nav, Card, Row, Col} from 'react-bootstrap';
import Star from './Star';
import Aos from 'aos';
// import ReactCardFlip from 'react-card-flip';
import {VscSearch} from 'react-icons/vsc';
import Index from './Data/Index.js';

function Home(){     

    const [isFlipped, setIsFlipped] = useState(false)            

    const handleClick = e => {
        e.preventDefault();          
        setIsFlipped(!isFlipped)
    }                                     
                                           

    useEffect(() => {
        Aos.init()
    })

    return(
        <div className='Home'>
        <Navbar bg="dark" expand="lg" className='navigasi'>
            <Container>
                <Navbar.Brand href="#home" className="text-dark"
                 style={{backgroundColor: 'yellow', border: '2px solid white', borderRadius: '20px', width: '200px', fontWeight: 800}}>
                    Mike Comic</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" className="text-white">Home</Nav.Link>
                    <Nav.Link href="#link" className="text-white">What's new</Nav.Link>
                    <Nav.Link href="#link" className="text-white">Coming soon</Nav.Link>
                    <Nav.Link href="#link" className="text-white">What to read</Nav.Link>
                    <Nav.Link href="#link" className="text-white">Top author</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            <div className="input-group" style={{borderRadius: '20px', backgroundColor: 'red'}}>
                <button className="input-group-text" id="basic-addon1"><VscSearch/></button>
                <input type="text" className="form-control text-white" placeholder="Search"
                  style={{border: '1px solid white', backgroundColor: '', width: '250px'}}/>
            </div>
         </Navbar>
              
         <Container>
            <Row md={3}>
             {
                Index.map((data) => {
                 return(
                    <div data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                        <Col>
                        
                        <div key={data?.id} className="mt-5">
                         {/* <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal"> */}
                            <Card className='card bg-dark'>
                            
                                    <div className='mx-5'>
                                        {/* <div className='order-2'><img src={data?.creator} style={{width: '100px', height: '100px', float: 'left', marginLeft: '-290px', marginTop: '200px'}}/></div>  */}
                                        <img src={data?.cover} 
                                        style={{width: '300px', height: '300px', float: 'left', marginLeft: '-49px', borderTopLeftRadius: '20px', borderTopRightRadius: '20px'}}/>
                                        
                                    </div>
                                    <h6 className='mt-3 fw-light'>{data?.judul}</h6>
                                    <Star/>
                                    <label style={{marginTop: '20px'}}>${data?.harga}</label>
                                    <button className='bg-dark text-white' 
                                    style={{width: '100px', marginLeft: '30px', borderRadius: '20px', border: '1px solid white', marginTop: '30px'}}>
                                        Buy
                                    </button>
                                    
                                    <button className='bg-dark text-white' onClick={handleClick}
                                    style={{width: '100px', marginLeft: '170px', borderRadius: '20px', border: '1px solid white', marginTop: '-28px'}}>
                                        View
                                    </button>
                                    {/* <button onClick={handleClick}>cfeece</button> */}
                                    
                                  
                                {/* <div style={{height: '20px'}}>{data?.SKU}</div>
                                <div>{data?.judul}</div>
                                <div style={{fontSize: '12px', width: '200px', fontWeight: 200}}>{data?.sinopsis}</div> */}
                            </Card>
                            {/* </ReactCardFlip> */}
                        </div>
                        </Col>
                    {/* </div> */}
                    </div>
                 )    
                })
             }
             </Row>
         </Container>
        </div>
    )
}

export default Home;