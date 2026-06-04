import '../styles/Card.css';

function Card({ name, img, handleClick, id }) {
  return (
    <div className={`card card-${id}`} onClick={handleClick}>
      <img src={img} alt="" className="card-img" />
      <p className="card-name">{name}</p>
    </div>
  );
}

export default Card;
