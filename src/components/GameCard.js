const GameCard = ({ name, image, description, price, category }) => {
  return (
    <div className="game-card">
      <img src={image} alt={name} className="game-image" />
      <h3 className="game-name">{name}</h3>
      <p className="game-description">{description}</p>
      <p className="game-price">${price}</p>
      <span className="game-category">{category}</span>
    </div>
  );
};

export default GameCard;