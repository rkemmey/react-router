import Card from "react-bootstrap/Card";

function CharCard({ character, isFavorite, addToFavs, removeFromFavs }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={character.image} />
      <Card.Body>
        <Card.Title>{character.name}</Card.Title>
        <Card.Text>
          <ul>
            <li>{character.species}</li>
            <li>{character.status}</li>
          </ul>
        </Card.Text>
        {isFavorite(character) ? (
          <button onClick={() => removeFromFavs(character)}>
            Remove From Favorites
          </button>
        ) : (
          <button onClick={() => addToFavs(character)}>Add To Favorites</button>
        )}
      </Card.Body>
    </Card>
  );
}

export default CharCard;