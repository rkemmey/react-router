import { useOutletContext } from "react-router-dom";
import CharCard from "../components/CharCard";

const FavCharsPage = () => {
  const { favChars, isFavorite, addToFavs, removeFromFavs } =
    useOutletContext();

  return (
    <>
      <h1>Favorite Characters</h1>
      <div>
        {favChars.map((char) => (
          <CharCard
            character={char}
            isFavorite={isFavorite}
            addToFavs={addToFavs}
            removeFromFavs={removeFromFavs}
          />
        ))}
      </div>
    </>
  );
};

export default FavCharsPage;