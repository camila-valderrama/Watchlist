import { useState, useEffect } from 'react'

const MovieCard = ({ id, title, poster_path, isInTheArray, onAdd, onDelete }) => {
  const [agregar, setAgregar] = useState(isInTheArray)

  const placeholderImage = 'https://via.placeholder.com/300x450?text=No+Image'

  const handleClick = () => {
    if (agregar) {
      onDelete(id)
    } else {
      onAdd({ id, title, poster_path })
    }
    setAgregar(!agregar)
  }

  useEffect(() => {
    setAgregar(isInTheArray)
  }, [isInTheArray])

  return (
    <div className='flex flex-col justify-between border-1 border-blue-600 rounded-lg p-5 bg-violet-300 m-3 basis-64'>
      <h1 className='text-xl font-bold'>{title}</h1>
      <img
        src={poster_path !== 'N/A' ? poster_path : placeholderImage}
        alt={`${title}-poster`}
        className='rounded-sm h-80 object-cover'
      />
      <button
        className='bg-blue-500 hover:bg-blue-800 text-white font-medium py-2 px-4 mt-4 rounded-full cursor-pointer'
        onClick={handleClick}
      >
        {agregar ? 'Quitar' : 'Agregar'}
      </button>
    </div>
  )
}

export default MovieCard
