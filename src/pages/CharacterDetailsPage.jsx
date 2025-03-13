import { useEffect, useState } from "react";
import { useParams, useOutletContext } from "react-router-dom";
import axios from "axios";

const ACharacterPage = () => {
  const [character, setCharacter] = useState({});
  const { id } = useParams();
  const { isFavorite, removeFromFavs, addToFavs} = useOutletContext()

  const getCharacter = async () => {
    let response = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    setCharacter(response.data);
    console.log(response.data)
  };

  useEffect(() => {
    getCharacter();
  }, []);

  return (
    <>
      <h2>{character.name}</h2>
      <img src={character.image} />
      <ul>
        <li>Species: {character.species}</li>
        <li>Status: {character.status}</li>
      </ul>
      {isFavorite(character) ? (
              <button onClick={() => removeFromFavs(character)}>
                Remove From Favorites
              </button>
            ) : (
              <button onClick={() => addToFavs(character)}>
                Add To Favorites
              </button>
        )}
    </>
  );
};

export default ACharacterPage;