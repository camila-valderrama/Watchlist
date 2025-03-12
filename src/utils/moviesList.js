  const moviesList = () => {
    const API_KEY = 'c56e5de2';
    const url = `https://www.omdbapi.com/?s=movie&type=movie&apikey=${API_KEY}`;
  
    const list = fetch(url)
      .then((response) => response.json())
      .then((data) => data.Search || []); // OMDb devuelve los resultados en "Search"
  
    return list;
  };
  
  export default moviesList
  