import {useState, useEffect} from 'react'; 
import Card from '../Card';
import axios from 'axios';

function Product(){
    const [value, setValue] = useState({data:[]});

  const get = () => {
       axios.get(`http://localhost:3300/api/products`)  

        .then(response => {
            setValue(response.data)
        })
        .catch(err => {
            setValue(err)
        })
  }

  useEffect(() => {
    get()
  }, []);


  return(
      <div className='Product'>
          <div className='container'>
            {value.data?.map( (data, Index) => {
                    return( 
                      <div key={Index}>
                                <Card
                                  img={data.image_url}
                                  h5={data.name}
                                  price={data.price} 
                                  desc={data.description}
                                  tags={data.tags?.name}
                                />                   
                      </div>                         
                      )})};
           </div> 
      </div>
)};

export default Product;
