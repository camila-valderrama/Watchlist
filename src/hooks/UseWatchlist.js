import { useState, useEffect } from 'react';

const useWatchlist = () => {
  const [watchlist, setWatchlist] = useState([]);


  const addToWatchlist = (movie) => {
    //Agrega una pelicula al array del estado
    setWatchlist([...watchlist, movie]);

    //Agrega una pelicula al array del localStorage
    localStorage.setItem("watchlist", JSON.stringify([...watchlist, movie]));
  }

  const removeFromWatchlist = (id) => {
    const updatedList = watchlist.filter(movie => movie.id !== id);
    setWatchlist(updatedList);
    localStorage.setItem("watchlist", JSON.stringify(updatedList));
  }

  //Carga la lista desde localStorage
  useEffect(() => {
    const savedWatchlist = JSON.parse(localStorage.getItem("watchlist")) || []
    setWatchlist(savedWatchlist)
  }, [])

  return {
    watchlist,
    addToWatchlist,
    removeFromWatchlist,
  };
}

export default useWatchlist;