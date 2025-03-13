import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useOutletContext } from 'react-router-dom';

const CharactersPage = () => {
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate()
  const { addToFavs, isFavorite, removeFromFavs } = useOutletContext();

  const getAllCharacters = async () => {
    try{
        let response = await axios.get("https://rickandmortyapi.com/api/character");
        console.log(response.data.results);
        setCharacters(response.data.results);
    }
    catch (error) {
        console.error("Error fetching data:", error); }
  };

  const handleClick = (id) => {
    navigate(`/characters/${id}`);
  };

  useEffect(() => {
    getAllCharacters();
  }, []);

  return (
    <>
      <h2>All Characters</h2>
      <ul>
        {characters.map((character) => (
          <li key={character.id}><button onClick={() => handleClick(character.id)}>{character.name}</button>
          { isFavorite(character) ? (
            <button onClick={() => removeFromFavs(character)}>
              Remove From Favorites
            </button>
          ) 
          : (
            <button onClick={() => addToFavs(character)}>
              Add To Favorites
            </button>
         )}
        </li>
        ))} 
      </ul>
    </>
  );
};


export default CharactersPage;

