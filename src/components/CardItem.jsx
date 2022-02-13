import { Link } from "react-router-dom";

const CardItem = ({ item }) => {
  return (
    
    <div className="cardItem">
      <p>place: {item.properties.place} </p>
      <p>time: {new Date(item.properties.time).toUTCString()} </p>
      <Link className="btn" to={`/details/${item.id}`}>Open</Link>
      
    </div>
  );
};

export default CardItem;
