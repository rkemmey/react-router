import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ACharacterPage = () => {
  const [character, setCharacter] = useState({});
  const { id } = useParams();

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
    </>
  );
};

export default ACharacterPage;