import React, {useState, useEffect} from "react";
// import {useLocation} from 'react-router-dom'; 
import axios from "axios";
import urlApi from "../urlApi";
import Card from "../Card";   

function Input() {

const [value, setValue] = useState([]);
const [dataSearch, setDataSearch] = useState('');


useEffect(() => {
  axios.get(`${urlApi}/api/products`)
  .then( response => {
      setValue(response.data);
      setDataSearch(response.data);
      console.log(response.data);
    }
  )
  .catch(err => {
    return err
  })
}, []);

const handleInput = (e) => {
    let val = e.target.value.toLowerCase();
    let result = [];
    console.log(val)
    result = val.filter((data) => {
        return data.name.toLowerCase().includes(dataSearch.toLowerCase());
    });
    setDataSearch(result);
  };


  

   return(
       <div>
    <div>
    <form style={{marginTop: '14px', marginLeft: '20px'}}> 
    <input 
    placeholder='Cari Barang'
    onClick={handleInput}
    />
    </form>
 </div>
       <div>
            {value.data?.map((value, key) => {
              return(
                   <div key={key}>
                    <Card
                        img={value.image_url}
                        h5={value.name}
                        price={value.price} 
                        desc={value.description}
                        tags={value.tags?.name}
                    />
                   </div>
               )
           })}
       </div>
       </div>
   )
}

export default Input;