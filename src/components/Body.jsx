import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import MovieCard from './MovieCard'
import SideBar from './SideBar'
import { animaciones } from '../utils/animations'
import ButtonList from './ButtonList'
import useWatchlist from '../hooks/UseWatchlist'

const Body = () => {
  const [movies, setMovies] = useState([])
  const { watchlist, addToWatchlist, removeFromWatchlist } = useWatchlist()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const API_KEY = 'c56e5de2'

  const SidebarOpen = () => {
    setIsSidebarOpen(true)
  }

  const SidebarClose = () => {
    setIsSidebarOpen(false)
  }

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?s=movie&type=movie&apikey=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.Search) {
          setMovies(data.Search)
        }
      })
      .catch((error) => console.error('Error al obtener películas:', error))
  }, [])

  return (
    <div className='bg-linear-145 flex flex-col min-h-screen'>
      <AnimatePresence initial={false}>
        {isSidebarOpen && (
          <motion.div
            variants={animaciones()}
            initial='initial_menu'
            animate='animate_menu'
            exit='exit_menu'
            transition={{ duration: 1 }}
            className='fixed top-0 right-0 bg-red-100 w-80 h-full z-1 opacity-90 overflow-y-auto scrollbar-thin scrollbar-track-gray-700 scrollbar-thumb-gray-600'
          >
            <SideBar watchlist={watchlist} onClose={SidebarClose} remove={removeFromWatchlist} />
          </motion.div>
        )}
      </AnimatePresence>

      <h1 className='flex p-10 text-5xl text-blue-600 font-bold justify-center'>Estrenos Recientes</h1>

      <ButtonList SidebarOpen={SidebarOpen} />

      <div className='flex flex-content container flex-wrap justify-center mx-auto flex-grow'>
        {movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            id={movie.imdbID}
            title={movie.Title}
            poster_path={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300'}
            backdrop_path={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300'}
            isInTheArray={watchlist.some((m) => m.id === movie.imdbID)}
            onAdd={addToWatchlist}
            onDelete={removeFromWatchlist}
          />
        ))}
      </div>
    </div>
  )
}

export default Body
