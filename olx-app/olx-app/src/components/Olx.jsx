import '../styles/Olx.css'

function Olx(props) {
  const{bikeImg,price,yearKms,bikeName,location,uploadDate}=props
  return (
    <div className="item-container">
    <div className="item-img">
      <img src={bikeImg} alt="" height="300px" width="300px" />
      {/* <div className="like-btn">
          <img  alt="" height="300px" width="300px"/>
      </div> */}
    </div>
    <div className="price">₹ {price}</div>
    <div className="year-kms">{yearKms} km</div>
    <div className="bike-name">{bikeName}</div>
    <div className="loc-date">
      <div className="location">{location}</div>
      <div className="upload-date">{uploadDate}</div>
    </div>
  </div>
  )
}

export default Olx
