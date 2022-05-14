import React, {useState, useEffect} from "react";
// import {useLocation} from 'react-router-dom'; 
import axios from "axios";
import urlApi from "../urlApi";
import Card from "../Card";   

function Input() {

const [filterVal, setFilterVal] = useState('');
const [result, setResult] = useState([]);
const [searchFilter, setSearchFilter] = useState([]);


useEffect(() => {
    axios.get(`${urlApi}/api/products`)
    .then(response => {
       setResult(response.data)
      //  setSearchApiData(response.data)
    })
}, []);

useEffect(() => {
  setSearchFilter(
    result.filter((user) => user.name.toLowerCase().includes(filterVal.toLowerCase()))
  )
 
  // const filterData = result.filter((item) =>
  //   item.name.toLowerCase().includes(filterVal)
  // );
  // setResult(filterData);
  // console.log(filterData);
}, [filterVal, result]);


// const hadlerFilter = (nilai) => {
//   if(filterVal === ''){
//     return nilai
//   } else {
//     const filterResult = searchApiData.filter(item => item.name.toLowerCase().includes(filterVal.toLowerCase()))
//     return nilai
//   }
//   setFilterVal(nilai)
// }

// const handleSubmit = (e) => {
//    setFilterVal(e.target.value);
// }


  
 return(
    <div>
        <input 
        placeholder='Cari Barang'
        type='text'
        name='input'
        onChange={e => setFilterVal(e.target.value)}
        />
            {searchFilter.data?.map((value) => {
              return(
                   <div>
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
   )
}

export default Input;