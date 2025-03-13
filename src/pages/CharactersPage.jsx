import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const CharactersPage = () => {
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate()

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
          <li key={character.id}><button onClick={() => handleClick(character.id)}>{character.name}</button></li>
        ))}
      </ul>

    </>
  );
};


export default CharactersPage;

