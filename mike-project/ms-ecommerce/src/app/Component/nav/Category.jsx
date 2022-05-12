import React, {useState, useEffect} from 'react';
import axios from 'axios';
import urlApi from '../urlApi';
import {Container, Navbar, NavDropdown, Nav} from 'react-bootstrap';
import Card from '../Card';

function Category() {
  const [value, setValue] = useState([]);
  const [dataSearch, setDataSearch] = useState([]);
  const [text, setText] = useState("");
 
  useEffect(() => {
    axios.get(`${urlApi}/api/products?`)
    .then(
      (result) => {
        setValue(result.data);
        setDataSearch(result.data);
        console.log(result);
      }
    );
  }, []);


  useEffect(() => {
    const filterWisata = dataSearch.filter((item) =>
      item.category.toLowerCase().includes(text.toLowerCase())
    );
    setValue(filterWisata);
    console.log(filterWisata);
  }, [text]);



  const handleInput = (e) => {
    setText(e.target.value);
  };
    


   return(
    <div>  
           <div className='Category' style={{paddingLeft: '80px', paddingTop: '10px'}}>
               {/* <button onClick={handleCategory}>Jam tangan pria</button>
               <button onClick={handleCategory}>Jam tangan wanita</button> */}
        <Navbar>
            <Container fluid>
            <Navbar.Collapse id='navbar'>
                <Nav>
                <NavDropdown
                    id='nav-dropdown'
                    title='Kategori'
                >
                    <NavDropdown.Item onClick={handleInput}>Jam Tangan Pria</NavDropdown.Item>
                    <NavDropdown.Item onClick={handleInput}>Jam Tangan Wanita</NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
        <div>
        {value.data?.map((data) => {
            return(
                <div key={data.id}>
                    <Card
                        img={data.image_url}
                        h5={data.name}
                        price={data.price} 
                        desc={data.description}
                        tags={data.tags?.name}
                    />
                </div>
            )
         })}
         </div>
    </div>
   )
}

export default Category;