// const data = `http://localhost:3300/images`;
const Card = ({h5, desc, price}) => {
    return(
    <div>
     {/* <img src={img}>{data}</img> */}
      <h5>{h5}</h5>
      <p>{desc}</p>
      <p>Rp.{price}</p>
    </div>
    )
}

export default Card;
