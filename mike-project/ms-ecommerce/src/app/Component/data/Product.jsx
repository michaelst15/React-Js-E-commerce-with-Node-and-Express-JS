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
      <div>
          <div className='mt2'>
            {value.data?.map( (data, Index) => {
              return( 
                <div key={Index}>
                      <img src={`http://localhost:3300/images/${data.image_url}`} />
                      <Card
                        // img
                        h5={data.name}
                        desc={data.description}
                        price={data.price}
                      />
                    </div>
                )
            })};
      </div>
   </div>
)};

export default Product;
