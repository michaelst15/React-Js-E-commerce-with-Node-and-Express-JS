import React from 'react';
import dbJS from './db';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { Carousel, CarouselItem } from 'react-bootstrap';
import { FiPlay } from 'react-icons/fi';
import { AiFillStar } from 'react-icons/ai';
import { GrFacebook } from 'react-icons/gr';
import { IoLogoYoutube } from 'react-icons/io';
import { ImTwitter } from 'react-icons/im';
import { RiInstagramFill } from 'react-icons/ri';
import { IoMdShareAlt } from 'react-icons/io';
import { BsBookmarkPlus } from 'react-icons/bs';
import movie1 from './Img/mortalCombatMovie1.jpg';
import movie2 from './Img/mortalCombatMovie2.jpg';
import movie3 from './Img/mortalCombatMovie3.jpg';
import movie4 from './Img/mortalCombatMovie4.jpg';
import logoHeader from './Img/logoHeader.png';
import './Style.sass';

const Home: React.FunctionComponent = () => {
    return(
       <div>
         <div className='flex'>
          <Container className='carousel-image'>
            <Carousel style={{width: '800px', marginTop: '30px'}}>
              <CarouselItem>
               <img src={logoHeader} style={{width: '800px', float: 'left', marginTop: '-50px'}}/>
              </CarouselItem>
              <CarouselItem>
               <img src={movie1} style={{width: '800px', height: '450px', float: 'left', marginTop: '-50px'}}/>
              </CarouselItem>
              <CarouselItem>
               <img src={movie2} style={{width: '800px', height: '450px', float: 'left', marginTop: '-50px'}}/>
              </CarouselItem>
              <CarouselItem>
               <img src={movie3} style={{width: '800px', float: 'left', marginTop: '-50px'}}/>
              </CarouselItem>
              <CarouselItem>
               <img src={movie4} style={{width: '800px', float: 'left', marginTop: '-50px'}}/>
              </CarouselItem>
            </Carousel>
           </Container>
            <article>
              <h4 className='title-article text-white'>Mortal Combat The Movie</h4>
              <p style={{width: '500px', color: 'white', marginRight: '31px', float: 'right', marginTop: '20px', fontWeight: 200}}>
              A story about a group of martial arts experts,
              where they only have six days to save Earth from attack'
              that comes from extra-dimensional.
              Mortal Kombat games are also famous for their content that falls into the gore category, 
              a genre that contains sadistic and explicit scenes. There is a fatality, 
              an option for the player at the end of the fight in the form of an optional move 
              to hurt the opponent further even though the opponent's health bar has reached zero.
              </p>
              <button className='bg-primary text-white' style={{borderRadius: '10px', width: '130px', height: '44px', marginTop: '40px', marginLeft: '790px'}}>Learn Stories</button>
            </article>
         </div>
         <Container style={{marginTop: '200px'}}>
           <Row md={4}>
              {dbJS.map(index => {
                return(
                  <Col md={4}>
                   <Card className='trailer mt-5' style={{height: '600px', width: '300px', marginBottom: '150px'}}>
                     <BsBookmarkPlus className='add'/>
                     <img className='image-trailer' src={index.img} style={{width: '100%', height: '400px'}}/>
                      <section>
                      <AiFillStar style={{color: 'yellow', marginBottom: '-20px', marginTop: '-22px', marginLeft: '-10px', marginRight: '10px', height: '80px', width: '20px'}}/>
                       <label style={{color: 'white', marginTop: '20px'}}>{index.rate}</label>
                      </section>
                     <label className='text-white mt-3' style={{fontWeight: 200}}>{index.title}</label>
                     <button className='button-card bg-dark' style={{marginTop: '38px', width: '200px', marginLeft: '50px'}}>
                      <FiPlay style={{marginLeft: '-80px', marginTop: '12px'}}/>
                      <p style={{marginLeft: '40px', marginTop: '-20px', fontWeight: 200}}>Trailer</p>
                     </button>
                   </Card> 
                  </Col>
                )
              })}
            </Row>
         </Container>
         <Container>
            <GrFacebook style={{width: '80px', height: '25px', color: 'white'}}/>
            <IoLogoYoutube className='mx-3' style={{width: '80px', height: '25px', color: 'white'}}/>
            <ImTwitter style={{width: '80px', height: '25px', color: 'white'}}/>
            <RiInstagramFill className='mx-3' style={{width: '80px', height: '25px', color: 'white'}}/>
         </Container>
         <Container className='flex' style={{marginTop: '100px'}}>
             <section className='first-section'>
               <label className='col-md-1' style={{color: 'white'}}>Info<IoMdShareAlt/></label>
               <label className='col-md-1' style={{color: 'white'}}>Payment<IoMdShareAlt/></label>
               <label className='col-md-1' style={{color: 'white'}}>Security<IoMdShareAlt/></label>
               <label className='col-md-1' style={{color: 'white'}}>Demo<IoMdShareAlt/></label>
               <label className='col-md-1' style={{color: 'white'}}>Docs<IoMdShareAlt/></label>
             </section>
             <section className='second-section mt-5 mb-5'>
               <label className='col-md-1' style={{color: 'white'}}>Review<IoMdShareAlt/></label>
               <label className='col-md-1' style={{color: 'white'}}>View<IoMdShareAlt/></label>
               <label className='col-md-1' style={{color: 'white'}}>Forum<IoMdShareAlt/></label>
               <label className='col-md-1' style={{color: 'white'}}>Dev<IoMdShareAlt/></label>
               <label className='col-md-1' style={{color: 'white'}}>Extend<IoMdShareAlt/></label>
             </section>
         </Container>
       </div>
    )
} 

export default Home;