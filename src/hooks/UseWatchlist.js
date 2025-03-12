import { useState, useEffect } from 'react';

const useWatchlist = () => {
  // Inicializa watchlist con los datos guardados en localStorage
  const [watchlist, setWatchlist] = useState(() => {
    const savedWatchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    return savedWatchlist;
  });

  // Guarda watchlist en localStorage cada vez que cambia
  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  const addToWatchlist = (movie) => {
    setWatchlist((prevWatchlist) => {
      const updatedList = [...prevWatchlist, movie];
      return updatedList;
    });
  };

  const removeFromWatchlist = (id) => {
    setWatchlist((prevWatchlist) => {
      return prevWatchlist.filter(movie => movie.id !== id);
    });
  };

  return { watchlist, addToWatchlist, removeFromWatchlist };
}

export default useWatchlist;
