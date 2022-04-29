import '../../App.css'; 

const Card = ({img, h5, desc, price}) => {
    return(
      <div className='Item-Product'>
            <img src={`http://localhost:3300/images/${img}`} style={{height: '120px', marginLeft: '130px', marginTop: '20px', marginBottom: '40px'}}></img>
              <div className='item-description mx-5'>
                <h5 style={{textAlign: 'center'}}>{h5}</h5>
                <p style={{fontSize: '14px'}}>{desc}</p>
                  <div className='d-flex'>
                     <i className="fa-solid fa-cart-shopping fs-5" ></i>
                     <p className='fs-5 mx-3' style={{marginTop: '-7px'}}>Rp.{price}</p>
                  </div>
              </div>
      </div>
    )
}

export default Card;
