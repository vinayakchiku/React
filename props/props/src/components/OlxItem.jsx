import "../styles/OlxItem.css";
import heart from '../assets/heart.png'
const OlxItem = (props) => {
  const { bikeImg, price, yearKms, bikeName, location, uploadDate } = props;

  return (
    <div className="item-container">
      <div className="item-img">
        <img src={bikeImg} alt="" height="100%" width="100%" />
        <div className="like-btn">
            <img src={heart} alt="" height="100%" width="100%"/>
        </div>
      </div>
      <div className="price">₹ {price}</div>
      <div className="year-kms">{yearKms} km</div>
      <div className="bike-name">{bikeName}</div>
      <div className="loc-date">
        <div className="location">{location}</div>
        <div className="upload-date">{uploadDate}</div>
      </div>
    </div>
  );
};

export default OlxItem;
