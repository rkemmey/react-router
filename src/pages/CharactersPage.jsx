import { useEffect, useState } from "react";
import axios from "axios";


const CharactersPage = () => {
  const [characters, setCharacters] = useState([]);

  const getAllCharacters = async () => {
    try{
        let response = await axios.get("https://rickandmortyapi.com/api/character");
        console.log(response.data.results);
        setCharacters(response.data.results);
    }
    catch (error) {
        console.error("Error fetching data:", error); }
  };

  useEffect(() => {
    getAllCharacters();
  }, []);

  return (
    <>
      <h2>All Characters</h2>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>

    </>
  );
};


export default CharactersPage;

