import '../../App.css'; 

const Card = ({img, h5, desc, price, tags}) => {
    return(
      <div className='Item-Product'>
            <img src={`http://localhost:3300/images/${img}`} style={{height: '120px', marginLeft: '130px', marginTop: '10px', marginBottom: '25px'}}></img>
              <div className='item-description mx-5'>
                <h5 style={{textAlign: 'center'}}>{h5}</h5>
                <p style={{fontSize: '14px', marginBottom: '20px'}}>{desc}</p>
                  <div className='d-flex bg-dark text-white' style={{width: '90px', borderRadius: '8px'}}>
                     <i className="fa-solid fa-tag" style={{paddingTop: '12px', paddingLeft: '14px', paddingRight: '7px'}}></i>
                     <p className='mx-2' style={{paddingTop: '9px'}}>{tags}</p>
                  </div>
                  <div className='d-flex mt-3'>
                     <i className="fa-solid fa-cart-shopping fs-5" ></i>
                     <p className='fs-5 mx-3' style={{marginTop: '-7px'}}>Rp.{price}</p>
                  </div>
              </div>
      </div>
    )
}

export default Card;
