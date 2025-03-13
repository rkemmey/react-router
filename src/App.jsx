// App.js
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";

export default function App() {

  const [favChars, setFavChars] = useState([]);

  const addToFavs = (char) => {
    if (favChars.filter((favChar) => favChar.id === char.id).length) {
      alert("character already in favorites");
    } else {
      setFavChars([...favChars, char]);
    }
  };

  const removeFromFavs = (char) => {
    setFavChars(favChars.filter((favChar) => favChar.id !== char.id));
  };

  const isFavorite = (char) => {
    if (favChars.filter((favChar) => favChar.id === char.id).length) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    console.log(favChars);
  }, [favChars]);
  return (
    <>
      <NavBar/>
      <Outlet context={{ favChars, addToFavs, removeFromFavs, isFavorite }}/>
  </>
  )
}
