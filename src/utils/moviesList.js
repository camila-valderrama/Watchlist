
/*const moviesList = () => {

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYjg0YmY1ZjM5ZGUwZGU0ODI4MzlhMTUzNmY4M2NiMSIsIm5iZiI6MTc0MDcwODc3Mi42OTEsInN1YiI6IjY3YzExYmE0YjZjN2UzNDI1Y2EyNjYxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yImwSi8dt6-ZYgcs2tpv76fKw68zenu7uHj2cPUczWM'
      }
    }
  
    const list = fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=es-ES&page=1&sort_by=popularity.desc', options)
      .then((response) => response.json())
      .then((data) => { return (data.results) })
  
    return list
  }
  
  export default moviesList*/

  const moviesList = () => {
    const API_KEY = 'c56e5de2';
    const url = `https://www.omdbapi.com/?s=movie&type=movie&apikey=${API_KEY}`;
  
    const list = fetch(url)
      .then((response) => response.json())
      .then((data) => data.Search || []); // OMDb devuelve los resultados en "Search"
  
    return list;
  };
  
  export default moviesList
  